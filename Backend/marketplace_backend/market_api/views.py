from .models import ProductModel,Cart,CartItem,OrderItem,Order
from .serializers import Product_serializers,UserReistrationSerializers,CartSerializers,CartItemSerializers,OrderSerializer,OderItemSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status,generics
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated,AllowAny
from decimal import Decimal


class ProductViewSet(ModelViewSet):
    permission_classes =[AllowAny]
    
    queryset = ProductModel.objects.all()
    serializer_class = Product_serializers
    
    
class RegisterView(generics.CreateAPIView):
    permission_classes =[AllowAny]
    serializer_class = UserReistrationSerializers
    
    
class AddToCartView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self,request):
        product_id = request.data.get("product_id")
        quantity = request.data.get("quantity",1)
       
        product = get_object_or_404(ProductModel,id=product_id)
        cart, _ = Cart.objects.get_or_create(user = request.user)
        cart_item , created = CartItem.objects.get_or_create(cart=cart,product=product)
       
        if not created:
           cart_item.quantity = cart_item.quantity + int(quantity)
        cart_item.save()
        
        return Response({"message":"Added to cart","items": CartItemSerializers(cart_item).data},
        status = status.HTTP_201_CREATED)
        


class GetCartView(APIView):
    permission_classes = [IsAuthenticated]
    
    def get(self,request):
        try:
            cart = Cart.objects.get(user = request.user )
        except Cart.DoesNotExist:
            return Response({"detail":"cart not found"},status= status.HTTP_404_NOT_FOUND)
        
        serializer = CartSerializers(cart)
        return Response(serializer.data, status = status.HTTP_200_OK)


class DeleteCartItemView(APIView):
    def delete(self,request,cart_item_id):
            item = get_object_or_404(CartItem,id=cart_item_id)
            item.delete()
            return Response({"message":"item deleted successfully"},status=status.HTTP_200_OK)
       

class CreateOrderView(APIView):
    permission_classes=[IsAuthenticated]

    def post(self, request):
        user=request.user
        cartItems = CartItem.objects.filter(cart__user=user)

        if not cartItems.exists():
            return Response({"detail":"Cart is empty"}, status=400)

        totalPrice = Decimal(0)
        for item in cartItems:
            totalPrice += Decimal(item.product.price) * item.quantity

        order = Order.objects.create(user=user, price=totalPrice)

        for item in cartItems:
            OrderItem.objects.create(
                order = order,
                product = item.product,
                quantity = item.quantity,
                price = item.product.price
                )

        cartItems.delete()

        return Response({
            "message": "Order created successfully",
            "order_id": order.id,
            "totalPrice": str(order.price)
            }, status=status.HTTP_201_CREATED)



class GetOrderView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        try:
            orderItem = OrderItem.objects.filter(order__user=request.user)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)
        serializer = OderItemSerializer(orderItem,many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
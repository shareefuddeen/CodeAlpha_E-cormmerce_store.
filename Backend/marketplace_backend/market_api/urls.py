from django.urls import path,include
from rest_framework.routers import DefaultRouter
from .views import RegisterView, ProductViewSet,DeleteCartItemView,AddToCartView,GetCartView,CreateOrderView,GetOrderView
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

router = DefaultRouter()
router.register("products",ProductViewSet)

urlpatterns = [
    path("",include(router.urls)),
    path("register/", RegisterView.as_view(),name="user-register"),
    path("token/",TokenObtainPairView.as_view(),name="obtain-token"),
    path("token/refresh/",TokenRefreshView.as_view(),name="refresh-token"),
    path("add-item/", AddToCartView.as_view(), name="add-cart"),
    path("delete-item/<int:cart_item_id>/", DeleteCartItemView.as_view(), name="delete-cart"),
    path("get-cart/", GetCartView.as_view(), name="get-cart"),
    path('create-order/', CreateOrderView.as_view(), name='create-order'),
    path('get-order/',GetOrderView.as_view(), name='get-order'),
]

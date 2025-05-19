from rest_framework import serializers
from .models import ProductModel,Cart,CartItem,OrderItem,Order
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class UserReistrationSerializers(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password2 = serializers.CharField(write_only=True, required =True)
    
    class Meta:
        model= User
        fields =["username","email","password","password2"]
    
    def validate(self, data):
        if data['password'] != data['password2']:
            raise ValidationError("passwords must match")
        return data
    
    
    def create(self, validated_data):
        password = validated_data.pop('password')     

        validated_data.pop('password2',None)
        user = User.objects.create(**validated_data)
        
        user.set_password(password)
        user.save()
        return user

class Product_serializers(serializers.ModelSerializer):
    class Meta:
        model = ProductModel
        fields='__all__'
        

class CartItemSerializers(serializers.ModelSerializer):
        product = Product_serializers()
        
        class Meta:
            model = CartItem
            fields = ["id","product","quantity"]


class CartSerializers(serializers.ModelSerializer):
    items = CartItemSerializers(many = True)
    class Meta:
        model = Cart
        fields = '__all__'


class OderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ["product","quantity","price"]


class OrderSerializer(serializers.ModelSerializer):
    items = OderItemSerializer(many=True, read_only=True)
    class Meta:
        model = Order
        fields =["id","price","created_at","items"]
from django.db import models
from django.contrib.auth.models import User

class ProductModel(models.Model):
    name = models.CharField(max_length=25, null=False)
    description= models.CharField(max_length=100, null=False)
    price= models.CharField(max_length=10, null=False)
    image = models.URLField(default="")
    stock = models.IntegerField(default=0)
    
    def __str__(self):
        return f'{self.name}'


class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,null=True, blank=True) 
    price = models.DecimalField(max_digits=10, decimal_places=2, default=9.99)
    created_at =models.DateTimeField( auto_now_add=True)
    
    
class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name="orders")
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE, related_name="products")
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2, default=9.99)
    

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    
class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="items")
    product = models.ForeignKey(ProductModel, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
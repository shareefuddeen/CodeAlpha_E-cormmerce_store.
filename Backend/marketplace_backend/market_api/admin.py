from django.contrib import admin
from .models import ProductModel,Cart,OrderItem,Order,CartItem

admin.site.register(ProductModel)
admin.site.register(Cart)
admin.site.register(OrderItem)
admin.site.register(Order)
admin.site.register(CartItem)

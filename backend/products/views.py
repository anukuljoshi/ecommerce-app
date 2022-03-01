from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import ProductCategory, Product, ProductImage
from .serializers import (
    ProductCategorySerializer,
    ProductSerializer,
    ProductImageSerializer,
)

from users.models import MyUser, Address, Order, OrderItem
from users.serializers import (
    MyUserSerializer,
    AddressSerializer,
    OrderSerializer,
    OrderItemSerializer,
    OrderItemCreateSerializer,
)


@api_view(["GET"])
def get_all_products(request, *args, **kwargs):
    products = Product.objects.all()
    product_serializer = ProductSerializer(products, many=True)
    return Response(product_serializer.data, status=status.HTTP_200_OK)


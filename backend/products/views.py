from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from .models import ProductCategory, Product, ProductImage
from .serializers import (
    ProductSubCategorySerializer,
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


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_category_detail(request, *args, **kwargs):
    user = request.user
    category_slug = kwargs.get("category")

    # get category detail
    category = ProductCategory.objects.filter(slug=category_slug).first()

    if not category:
        # if no category => not found
        return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)

    category_serializer = ProductCategorySerializer(category)
    return Response(category_serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_categories(request, *args, **kwargs):
    user = request.user
    category_slug = kwargs.get("category")

    parent_category = None
    if category_slug:
        # get category if slug provided
        parent_category = ProductCategory.objects.filter(slug=category_slug).first()

    # get child categories for parent category
    child_categories = ProductCategory.objects.filter(parent=parent_category)

    child_categories_serializer = ProductSubCategorySerializer(
        child_categories, many=True
    )

    return Response(child_categories_serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_category_products(request, *args, **kwargs):
    user = request.user
    category_slug = kwargs.get("category")

    # get category from slug
    category = ProductCategory.objects.filter(slug=category_slug).first()

    if not category:
        # if no category for slug return not found
        return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)

    # get all child categories for the parent category
    all_categories = category.get_all_children()

    # get all products belonging to child categories
    products = Product.objects.filter(category__in=all_categories)
    products_serializer = ProductSerializer(products, many=True)

    return Response(products_serializer.data, status=status.HTTP_200_OK)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_product_detail(request, *args, **kwargs):
    user = request.user
    product_slug = kwargs.get("product")

    print(product_slug)

    # get product for slug
    product = Product.objects.filter(slug=product_slug).first()

    if not product:
        # if no product return 404
        return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)

    products_serializer = ProductSerializer(product)

    return Response(products_serializer.data, status=status.HTTP_200_OK)

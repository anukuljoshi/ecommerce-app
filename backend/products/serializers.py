from rest_framework import serializers

from .models import Product, ProductCategory, ProductImage


class ProductSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCategory
        fields = [
            "pk",
            "name",
            "description",
            "slug",
        ]


class ProductCategorySerializer(serializers.ModelSerializer):
    child_categories = ProductSubCategorySerializer(many=True)

    class Meta:
        model = ProductCategory
        fields = [
            "pk",
            "name",
            "description",
            "slug",
            "child_categories",
        ]


class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = [
            "pk",
            "image",
        ]


class ProductSummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["pk", "title", "units"]


class ProductSerializer(serializers.ModelSerializer):
    product_images = ProductImageSerializer(many=True)

    class Meta:
        model = Product
        fields = [
            "pk",
            "title",
            "price",
            "units",
            "category",
            "slug",
            "description",
            "product_images",
        ]

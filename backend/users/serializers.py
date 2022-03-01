from django.contrib.auth.hashers import make_password

from rest_framework import serializers

from .models import MyUser, Order, OrderItem, Address

from products.serializers import ProductSummarySerializer


class MyUserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            "username",
            "email",
            "password",
        ]

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super(MyUserCreateSerializer, self).create(validated_data)


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            "user",
            "location",
            "location2",
            "location3",
            "city",
            "country",
            "default",
        ]


class MyUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            "pk",
            "username",
            "email",
        ]


class OrderItemCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = [
            "order",
            "product",
            "quantity",
        ]


class OrderItemSerializer(serializers.ModelSerializer):
    item_price = serializers.FloatField(source="get_item_price")
    product = ProductSummarySerializer()

    class Meta:
        model = OrderItem
        fields = [
            "order",
            "product",
            "quantity",
            "date_added",
            "item_price",
        ]


class OrderSerializer(serializers.ModelSerializer):
    total = serializers.FloatField(source="get_total")
    order_items = OrderItemSerializer(many=True)

    class Meta:
        model = Order
        fields = [
            "user",
            "start_date",
            "order_date",
            "ordered",
            "shipping_address",
            "total",
            "order_items",
        ]

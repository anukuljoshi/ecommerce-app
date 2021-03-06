from django.contrib.auth.hashers import make_password

from rest_framework import serializers

from .models import MyUser, Order, OrderItem, Address

from products.serializers import ProductSummarySerializer


class MyUserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyUser
        fields = [
            "pk",
            "username",
            "email",
            "password",
        ]

    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data["password"])
        return super(MyUserCreateSerializer, self).create(validated_data)


class AddressCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            "pk",
            "user",
            "location1",
            "location2",
            "location3",
            "city",
            "country",
            "default",
        ]
        read_only_fields = ["user"]

    def update(self, instance, validated_data):
        instance.location1 = validated_data.get("location1", instance.location1)
        instance.location2 = validated_data.get("location2", instance.location2)
        instance.location3 = validated_data.get("location3", instance.location3)
        instance.city = validated_data.get("city", instance.city)
        instance.country = validated_data.get("country", instance.country)
        instance.default = validated_data.get("default", instance.default)
        instance.save()
        return instance


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            "pk",
            "user",
            "location1",
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
            "pk",
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
            "pk",
            "order",
            "product",
            "quantity",
            "date_added",
            "item_price",
        ]


class OrderCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = [
            "pk",
            "user",
            "start_date",
            "order_date",
            "ordered",
            "shipping_address",
        ]


class OrderSerializer(serializers.ModelSerializer):
    total = serializers.FloatField(source="get_total")
    order_items = OrderItemSerializer(many=True)
    shipping_address = AddressSerializer()

    class Meta:
        model = Order
        fields = [
            "pk",
            "user",
            "start_date",
            "order_date",
            "ordered",
            "shipping_address",
            "total",
            "order_items",
        ]

from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


from .models import MyUser, Address, Order, OrderItem
from .serializers import (
    MyUserCreateSerializer,
    MyUserSerializer,
    AddressSerializer,
    OrderSerializer,
    OrderItemSerializer,
    OrderItemCreateSerializer,
)

from products.models import Product


@api_view(["GET"])
def home(request, *args, **kwargs):
    return Response({"message": "Hello Users"}, status=status.HTTP_200_OK)


@api_view(["POST"])
def sign_up(request, *args, **kwargs):
    user_serializer = MyUserCreateSerializer(data=request.data)

    if user_serializer.is_valid():
        user = user_serializer.save()
        user_serializer = MyUserSerializer(user)
        return Response(user_serializer.data, status=status.HTTP_201_CREATED)

    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_cart(request, *args, **kwargs):
    user = request.user

    # get cart
    cart = Order.objects.filter(user=user, ordered=False).first()

    cart_serializer = OrderSerializer(cart)

    return Response(cart_serializer.data, status=status.HTTP_200_OK)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_to_cart(request, *args, **kwargs):
    user = request.user
    productId = kwargs["productId"]

    # find product to add to cart
    product = Product.objects.filter(pk=productId).first()

    # not found
    if not product:
        return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)

    # find auth user cart
    order = Order.objects.filter(user=user, ordered=False).first()

    # check if item already in cart
    order_item = OrderItem.objects.filter(order=order, product=product).first()

    # item already in cart increase quantity by one
    if order_item:
        order_item.quantity += 1
        order_item = order_item.save()
        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_200_OK)

    # item not in cart => create new cart item
    order_item_data = {"order": order.pk, "product": product.pk, "quantity": 1}
    order_item_serializer = OrderItemCreateSerializer(data=order_item_data)
    if order_item_serializer.is_valid():
        order_item_serializer.save()
        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_200_OK)

    return Response(order_item_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def remove_from_cart(request, *args, **kwargs):
    user = request.user
    productId = kwargs["productId"]

    # find product to remove from cart
    product = Product.objects.filter(pk=productId).first()

    # not found
    if not product:
        return Response({"message": "not found"}, status=status.HTTP_404_NOT_FOUND)

    # find auth user cart
    order = Order.objects.filter(user=user, ordered=False).first()

    # check if item already in cart
    order_item = OrderItem.objects.filter(order=order, product=product).first()

    # item already in cart
    if order_item:
        # quantity is one => delete cart item
        if order_item.quantity == 1:
            order_item.delete()
        # quantity is more than one => decrease quantity
        elif order_item.quantity > 1:
            order_item.quantity -= 1
            order_item.save()
        order_serializer = OrderSerializer(order)
        return Response(order_serializer.data, status=status.HTTP_200_OK)

    return Response({"message": "bad request"}, status=status.HTTP_400_BAD_REQUEST)


# handle payment before creating order
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def create_order(request, *args, **kwargs):
    user = request.user

    # get current cart
    cart = Order.objects.filter(user=user, ordered=False).first()

    if not cart.order_items.all():
        return Response({"message": "bad request"}, status=status.HTTP_400_BAD_REQUEST)

    # make cart to order
    cart.ordered = True
    order = cart.save()

    # create new empty cart for user
    cart = Order.objects.create(user=user, ordered=False)
    cart.save()

    order_serializer = OrderSerializer(order)

    return Response(order_serializer.data, status=status.HTTP_201_CREATED)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_orders(request, *args, **kwargs):
    user = request.user

    # get user orders
    orders = Order.objects.filter(user=user, ordered=True)

    orders_serializer = OrderSerializer(orders, many=True)

    return Response(orders_serializer.data, status=status.HTTP_200_OK)

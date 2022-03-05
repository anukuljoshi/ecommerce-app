from django.conf import settings
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

from rest_framework.authtoken.models import Token

from products.models import Product


class MyUserManager(BaseUserManager):
    def create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        user = self.model(
            username=username, email=self.normalize_email(email), **extra_fields
        )
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(username, email, password, **extra_fields)


class MyUser(AbstractUser):
    email = models.EmailField(unique=True)

    REQUIRED_FIELD = ["email"]

    objects = MyUserManager()

    def __str__(self):
        return f"{self.pk}: {self.username}"


class Address(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="addresses"
    )
    location1 = models.CharField(max_length=256)
    location2 = models.CharField(max_length=256, null=True, blank=True)
    location3 = models.CharField(max_length=256, null=True, blank=True)
    city = models.CharField(max_length=256)
    country = models.CharField(max_length=256)
    default = models.BooleanField(default=False)

    class Meta:
        verbose_name_plural = "Addresses"
        ordering = ["-pk"]

    def __str__(self):
        return f"{self.user.username} address {self.pk}"


class Order(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="orders"
    )
    start_date = models.DateTimeField(auto_now_add=True)
    order_date = models.DateTimeField(auto_now=True)
    ordered = models.BooleanField()
    shipping_address = models.ForeignKey(
        "Address",
        related_name="order",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    class Meta:
        ordering = ["-pk"]

    def __str__(self):
        return f"{self.user.username} order {self.pk}"

    def get_total(self):
        total = 0
        for item in self.order_items.all():
            total += item.get_item_price()

        return total


class OrderItem(models.Model):
    order = models.ForeignKey(
        Order, on_delete=models.CASCADE, related_name="order_items"
    )
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="order_item"
    )
    quantity = models.IntegerField(default=1)
    date_added = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = [["order", "product"]]

    def __str__(self):
        return f"{self.quantity} of {self.product.title}"

    def get_item_price(self):
        return self.quantity * self.product.price


@receiver(post_save, sender=MyUser)
def create_user_token(sender, instance=None, created=False, *args, **kwargs):
    if created:
        token = Token.objects.create(user=instance)
        token.save()
        return instance


@receiver(post_save, sender=MyUser)
def create_user_cart(sender, instance=None, created=False, *args, **kwargs):
    if created:
        cart = Order.objects.create(user=instance, ordered=False)
        cart.save()
        return instance

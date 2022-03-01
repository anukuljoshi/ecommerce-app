from django.urls import path

from rest_framework.authtoken import views as token_views

from . import views

urlpatterns = [
    path("", views.home),
    path("signup/", views.sign_up),
    path("login/", token_views.obtain_auth_token),
    path("cart/", views.get_cart),
    path("cart/add/<str:productId>/", views.add_to_cart),
    path("cart/remove/<str:productId>/", views.remove_from_cart),
    path("orders/", views.get_orders),
    path("orders/create/", views.create_order),
]

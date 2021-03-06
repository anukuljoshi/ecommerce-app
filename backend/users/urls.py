from django.urls import path

from rest_framework.authtoken import views as token_views

from . import views

urlpatterns = [
    path("", views.home),
    path("me/", views.get_auth_user),
    path("signup/", views.sign_up),
    path("login/", views.CustomAuthToken.as_view()),
    path("cart/", views.get_cart),
    path("cart/add/<str:productPk>/", views.add_to_cart),
    path("cart/remove/<str:productPk>/", views.remove_from_cart),
    path("orders/", views.get_orders),
    path("orders/create/", views.create_order),
    path("address/", views.get_user_addresses),
    path("address/default/", views.get_user_default_address),
    path("address/create/", views.create_user_address),
    path("address/<addressPk>/update/", views.update_user_address),
    path("address/<addressPk>/delete/", views.delete_user_address),
]

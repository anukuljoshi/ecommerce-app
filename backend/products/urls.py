from django.urls import path

from . import views

urlpatterns = [
    path("category/", views.get_categories),
    path("category/<str:category>/", views.get_categories),
    path("category/<str:category>/products/", views.get_category_products),
    path("products/", views.get_all_products),
    path("products/<str:product>/", views.get_product_detail),
]

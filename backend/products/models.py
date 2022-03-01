from django.db import models
from django.utils.text import slugify


class ProductCategory(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=512)
    slug = models.SlugField(unique=True, null=True, blank=True)
    parent = models.ForeignKey(
        "self",
        null=True,
        blank=True,
        related_name="child_categories",
        on_delete=models.CASCADE,
    )

    class Meta:
        verbose_name_plural = "Product Categories"

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.name)

        if self.pk and self.parent and self.pk == self.parent.pk:
            self.parent = None

        return super(ProductCategory, self).save(*args, **kwargs)

    def __str__(self):
        return self.name


class Product(models.Model):
    title = models.CharField(max_length=256)
    price = models.FloatField()
    units = models.IntegerField()
    category = models.ForeignKey(
        ProductCategory,
        related_name="category_products",
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )
    slug = models.SlugField(unique=True, null=True, blank=True)
    description = models.TextField()

    def save(self, *args, **kwargs):
        if not self.pk:
            self.slug = slugify(self.title)
        return super(Product, self).save(*args, **kwargs)

    def __str__(self):
        return self.title


def get_product_image_path(instance, filename):
    return f"images/{instance.product.category.name}/" + filename


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, related_name="product_images", on_delete=models.CASCADE
    )
    image = models.ImageField(upload_to=get_product_image_path)

    def __str__(self):
        return f"{self.product.title} image: {self.pk}"

from django.db import models
from django.core.exceptions import ValidationError
from django.utils.text import slugify


def get_product_category_image_path(instance, filename):
    return f"images/categories/" + filename


class ProductCategory(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.CharField(max_length=512)
    slug = models.SlugField(unique=True, null=True, blank=True)
    image = models.ImageField(upload_to=get_product_category_image_path)
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

    def get_all_children(self):
        children = [self]
        try:
            child_list = self.child_categories.all()
        except:
            return children

        for child in child_list:
            children.extend(child.get_all_children())

        return children

    def get_all_parents(self):
        parents = [self]
        if self.parent is not None:
            parent = self.parent
            parents.extend(parent.get_all_parents())

        return parents

    def clean(self):
        if self.parent in self.get_all_children():
            raise ValidationError(
                "A user cannot have itself \
                    or one of its' children as parent."
            )

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

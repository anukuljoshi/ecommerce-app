# Generated by Django 3.2 on 2022-02-28 09:02

from django.db import migrations, models
import products.models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0002_auto_20220226_1410'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimage',
            name='image',
            field=models.ImageField(upload_to=products.models.get_product_image_path),
        ),
    ]
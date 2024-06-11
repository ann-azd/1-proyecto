# Generated by Django 5.0.3 on 2024-03-19 01:02

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiales', '0005_material_cantidad'),
    ]

    operations = [
        migrations.AlterField(
            model_name='material',
            name='cantidad',
            field=models.IntegerField(default=0, validators=[django.core.validators.MinValueValidator(0)]),
        ),
    ]
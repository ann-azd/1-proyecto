# Generated by Django 5.0.3 on 2024-03-13 23:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiales', '0003_material_urlimage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='material',
            name='urlimage',
            field=models.ImageField(blank=True, default='/materialdf.jpg', null=True, upload_to=''),
        ),
    ]

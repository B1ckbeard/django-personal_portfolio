# Generated by Django 3.2.7 on 2021-11-26 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0009_auto_20211126_1810'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(upload_to='portfolio/images'),
        ),
        migrations.AlterField(
            model_name='project',
            name='img',
            field=models.ImageField(upload_to='portfolio/images'),
        ),
    ]

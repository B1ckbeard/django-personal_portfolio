# Generated by Django 3.2.7 on 2021-11-22 13:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_project_imagemain'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='imageMain',
            new_name='img',
        ),
    ]

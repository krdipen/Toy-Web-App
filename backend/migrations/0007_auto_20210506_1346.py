# Generated by Django 3.2 on 2021-05-06 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0006_auto_20210506_1342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='space',
            name='body',
            field=models.TextField(default='DATA NOT AVAILABLE'),
        ),
        migrations.AlterField(
            model_name='space',
            name='title',
            field=models.TextField(default='DATA NOT AVAILABLE'),
        ),
    ]

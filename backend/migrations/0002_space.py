# Generated by Django 3.2 on 2021-04-28 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Space',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userId', models.TextField()),
                ('title', models.TextField()),
                ('body', models.TextField()),
            ],
        ),
    ]

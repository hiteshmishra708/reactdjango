# Generated by Django 2.0.4 on 2018-11-25 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artistdetails', '0002_auto_20181123_1141'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tracks',
            name='releaseDate',
            field=models.DateField(auto_now_add=True),
        ),
    ]

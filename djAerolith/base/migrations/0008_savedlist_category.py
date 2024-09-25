# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-06-28 16:35


from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0007_maintenance"),
    ]

    operations = [
        migrations.AddField(
            model_name="savedlist",
            name="category",
            field=models.CharField(
                choices=[("A", "Anagram"), ("B", "Build"), ("T", "Through")],
                default="A",
                max_length=2,
            ),
        ),
    ]

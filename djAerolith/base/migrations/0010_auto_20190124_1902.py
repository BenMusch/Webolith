# Generated by Django 2.0.9 on 2019-01-25 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0009_auto_20170824_0722"),
    ]

    operations = [
        migrations.AlterField(
            model_name="alphagramtag",
            name="tag",
            field=models.CharField(
                choices=[
                    ("D5", "Very Easy"),
                    ("D4", "Easy"),
                    ("D3", "Average"),
                    ("D2", "Hard"),
                    ("D1", "Very Hard"),
                ],
                max_length=2,
            ),
        ),
    ]

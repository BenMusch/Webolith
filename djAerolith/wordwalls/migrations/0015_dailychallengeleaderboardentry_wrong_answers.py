# Generated by Django 2.0.9 on 2019-03-05 23:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("wordwalls", "0014_auto_20190124_1902"),
    ]

    operations = [
        migrations.AddField(
            model_name="dailychallengeleaderboardentry",
            name="wrong_answers",
            field=models.IntegerField(default=0),
        ),
    ]

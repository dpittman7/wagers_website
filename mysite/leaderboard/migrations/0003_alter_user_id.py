# Generated by Django 4.1.1 on 2022-11-23 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("leaderboard", "0002_user_username"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="id",
            field=models.BigIntegerField(primary_key=True, serialize=False),
        ),
    ]

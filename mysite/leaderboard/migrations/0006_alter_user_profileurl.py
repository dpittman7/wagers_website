# Generated by Django 4.1.1 on 2022-12-03 22:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leaderboard', '0005_user_profileurl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profileurl',
            field=models.CharField(default='https://i.imgur.com/rS1Nzax.png', max_length=100),
        ),
    ]
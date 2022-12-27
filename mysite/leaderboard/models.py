from django.db import models

# Create your models here.
class User(models.Model):
    id = models.BigIntegerField(primary_key=True)
    username = models.CharField(max_length=42, default=" ")
    wins = models.IntegerField()
    loses = models.IntegerField()
    total = models.IntegerField()
    streak = models.IntegerField()
    ranking = models.DecimalField(decimal_places=2, max_digits=8)
    eth_addy = models.CharField(max_length=42,unique=True)
    in_challenge = models.BooleanField()
    profileurl = models.CharField(max_length=100, default="https://i.imgur.com/rS1Nzax.png")

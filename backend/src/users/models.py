from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):

    def __str__(self):
        return self.username

class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

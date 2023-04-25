from django.db import models

# Create your models here.
class Product(models.Model):
   name = models.CharField(max_length=200)
   description = models.TextField(blank=True)
   price = models.PositiveIntegerField()
   stock = models.PositiveIntegerField(default=0, null=True)
   sold = models.PositiveIntegerField(default=0, null=True)
   #image = models.ImageField(blank='', default='', upload_to='fotos/')

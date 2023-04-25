#from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import ProductSerializer
from .models import Product

class ProductView(viewsets.ModelViewSet):
  serializer_class = ProductSerializer
  queryset = Product.objects.all()
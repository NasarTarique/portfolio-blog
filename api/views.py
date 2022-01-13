from django.shortcuts import render
from rest_framework import viewsets
from .models import Blogs,Projects
from .serializers import BlogSerializer, ProjectSerializer
# Create your views here.


class BlogViewset(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blogs.objects.all()

class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Projects.objects.all()

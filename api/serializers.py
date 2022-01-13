from rest_framework import serializers
from .models import Blogs, Projects

class BlogSerializer(serializers.Serializer):
    id =serializers.PrimaryKeyRelatedField(queryset=Blogs.objects.all())
    Heading = serializers.CharField(max_length=100)
    Description = serializers.CharField()
    Blog = serializers.CharField()
    Likes = serializers.IntegerField(default=0)

class ProjectSerializer(serializers.Serializer):
    id =serializers.PrimaryKeyRelatedField(queryset=Projects.objects.all())
    Name = serializers.CharField()
    Description = serializers.CharField()
    Github = serializers.CharField()
    Website = serializers.CharField()


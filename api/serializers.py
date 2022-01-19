from rest_framework import serializers
from .models import Blogs, Projects

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ('__all__')

class Bloglistserializer(serializers.ModelSerializer):
    class Meta:
        model = Blogs
        fields = ('id','Heading','Description')

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('__all__')


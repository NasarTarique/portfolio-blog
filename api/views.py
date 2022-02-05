from rest_framework import viewsets
from rest_framework.response import Response
from .models import Blogs,Projects
from .serializers import BlogSerializer, ProjectSerializer, Bloglistserializer
# Create your views here.


class BlogViewset(viewsets.ModelViewSet):
    serializer_class = BlogSerializer
    queryset = Blogs.objects.all()
    def list(self,request):
        serializer = Bloglistserializer(self.queryset, many=True) 
        return Response(serializer.data)

class ProjectViewset(viewsets.ModelViewSet):
    serializer_class = ProjectSerializer
    queryset = Projects.objects.all()


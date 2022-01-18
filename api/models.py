from django.db import models

# Create your models here.

class Blogs(models.Model):
    Heading = models.CharField(max_length=100)
    Description = models.TextField()
    Blog = models.TextField()
    Likes = models.IntegerField(default=0)

class Projects(models.Model):
    Name = models.CharField(max_length=50)
    Description = models.TextField()
    Github = models.CharField(max_length=100,default="",blank=True)
    Website = models.CharField(max_length=100, default="",blank=True)

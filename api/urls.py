from rest_framework import routers
from django.urls import path
from . import views

router = routers.DefaultRouter()
router.register('blogs',views.BlogViewset)
router.register('projects',views.ProjectViewset)
urlpatterns = [
]

urlpatterns +=router.urls

from django.urls import path
from . import views

urlpatterns = [
    path("",views.index),
    path("contact/",views.index),
    path("projects/",views.index),
    path("blogs/",views.index),
    path("blogs/<int:id>/",views.index)
]


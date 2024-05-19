from django.urls import path
from . import views

urlpatterns = [
    path("setBookDetails/", views.setBookDetails,name="setBookDetails"),
    path("generate/", views.generate,name="generate"),
    path("hello/", views.hello_world,name="hello_world"),
    path("getfinal/", views.getfinal,name="getfinal"),
    
]
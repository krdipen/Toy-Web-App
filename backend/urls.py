from django.urls import path
from backend import views

urlpatterns = [
    path('', views.home, name='home'),
    path('data', views.data, name='data'),
    path('upload', views.upload, name='upload'),
    path('signin', views.signin, name='signin'),
    path('signout', views.signout, name='signout'),
]
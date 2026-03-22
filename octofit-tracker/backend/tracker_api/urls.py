from django.urls import path

from .views import goals, health_check

urlpatterns = [
    path('health/', health_check, name='health-check'),
    path('goals/', goals, name='goals'),
]
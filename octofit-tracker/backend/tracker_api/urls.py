from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import goals, health_check, UserViewSet, TeamViewSet, ActivityViewSet, WorkoutViewSet, LeaderboardViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'teams', TeamViewSet)
router.register(r'activities', ActivityViewSet)
router.register(r'workouts', WorkoutViewSet)
router.register(r'leaderboards', LeaderboardViewSet)

urlpatterns = [
    path('health/', health_check, name='health-check'),
    path('goals/', goals, name='goals'),
    path('', include(router.urls)),
]
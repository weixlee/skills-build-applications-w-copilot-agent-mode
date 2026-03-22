from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Team, Activity, Leaderboard, Workout
from .serializers import UserSerializer, TeamSerializer, ActivitySerializer, LeaderboardSerializer, WorkoutSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
	queryset = Team.objects.all()
	serializer_class = TeamSerializer

class ActivityViewSet(viewsets.ModelViewSet):
	queryset = Activity.objects.all()
	serializer_class = ActivitySerializer

class WorkoutViewSet(viewsets.ModelViewSet):
	queryset = Workout.objects.all()
	serializer_class = WorkoutSerializer

class LeaderboardViewSet(viewsets.ModelViewSet):
	queryset = Leaderboard.objects.all()
	serializer_class = LeaderboardSerializer

@api_view(['GET'])
def health_check(request):
	return Response(
		{
			'service': 'OctoFit Tracker API',
			'status': 'ok',
			'modules': [
				'authentication',
				'activity tracking',
				'teams',
				'leaderboard',
				'workout suggestions',
			],
		}
	)

@api_view(['GET'])
def goals(request):
	return Response(
		{
			'goals': [
				'Create athlete profiles with secure sign-in',
				'Log workouts and recovery sessions',
				'Form teams and compare streaks',
				'Rank progress on a competitive leaderboard',
				'Recommend next workouts based on recent activity',
			]
		}
	)

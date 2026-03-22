from rest_framework.decorators import api_view
from rest_framework.response import Response


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

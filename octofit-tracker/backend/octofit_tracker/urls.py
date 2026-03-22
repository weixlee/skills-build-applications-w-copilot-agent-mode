import os

from django.contrib import admin
from django.urls import include, path
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.routers import DefaultRouter


# Dynamically construct the base_url for API endpoints using the CODESPACE_NAME environment variable.
# This ensures correct URLs for both Codespace and localhost environments.
codespace_name = os.environ.get('CODESPACE_NAME')
if codespace_name:
    base_url = f"https://{codespace_name}-8000.app.github.dev"
else:
    base_url = "http://localhost:8000"


@api_view(['GET'])
def api_root(request, format=None):
    return Response(
        {
            'name': 'OctoFit Tracker API',
            'status': 'ready',
            'endpoints': {
                'health': f'{base_url}/api/health/',
                'goals': f'{base_url}/api/goals/',
                'users': f'{base_url}/api/users/',
                'teams': f'{base_url}/api/teams/',
                'activities': f'{base_url}/api/activities/',
                'workouts': f'{base_url}/api/workouts/',
                'leaderboards': f'{base_url}/api/leaderboards/',
            },
        }
    )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tracker_api.urls')),
    path('', api_root, name='api-root'),
]

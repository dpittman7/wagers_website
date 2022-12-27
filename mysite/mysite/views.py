from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
from leaderboard.models import User
import datetime



def leaderboard(request):
    leaderboard = User.objects.order_by('ranking')
    t = get_template('leaderboard.html')
    html = t.render({'leaderboard_list': leaderboard})
    return HttpResponse(html)

def home(request):
    t = get_template('home.html')
    html = t.render()
    return HttpResponse(html)
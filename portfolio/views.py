from django.shortcuts import render
from django.http import HttpResponse
from portfolio.models import Project

def home(request):
    data = Project.objects.values()
    for i in data:
        print(i)


    return render(request, 'portfolio/home.html')

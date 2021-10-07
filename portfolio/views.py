from django.shortcuts import render
from django.http import HttpResponse
from portfolio.models import Project
from django.template import loader

def home(request):
    #s=''
    #for project in Project.objects.all():
    #    s+=project.title
    template =loader.get_template('portfolio/home.html')
    objects = Project.objects.all()
    context = {'objects': objects}
    return HttpResponse(template.render(context, request))

from django.shortcuts import render
from portfolio.models import Project
from django.template import loader

def home(request):
<<<<<<< HEAD
    projects = Project.objects.all()
    return render(request,'portfolio/home.html', {'projects': projects} )
=======
    #s=''
    #for project in Project.objects.all():
    #    s+=project.title
    template =loader.get_template('portfolio/home.html')
    objects = Project.objects.all()
    context = {'objects': objects}
    return HttpResponse(template.render(context, request))
>>>>>>> 423b679a1fcd7de77aac65d1f0085923b1ba8d7f

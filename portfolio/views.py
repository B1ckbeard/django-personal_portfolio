from django.shortcuts import render, get_object_or_404
from .models import Project, Image

def home(request):
    projects = Project.objects.order_by('-id')
    return render(request,'portfolio/home.html', {'projects': projects} )

def portfolio(request):
    projects = Project.objects.order_by('-id')
    return render(request, 'portfolio/portfolio.html', {'projects': projects})

def about(request):
    return render(request, 'portfolio/about.html')

def detailProject(request, project_id):
    project = get_object_or_404(Project, pk=project_id)
    images = Image.objects.filter(project_id = project.id)
    return render(request, 'portfolio/detailProject.html', {'project':project, 'images': images})

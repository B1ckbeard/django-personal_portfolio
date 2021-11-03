from django.db import models

class Project(models.Model):
    title = models.CharField(max_length = 100)
    description = models.CharField(max_length = 250, blank = True)
    #image = models.ImageField(upload_to='portfolio/images')
    git_url = models.URLField(blank = True)
    site_url = models.URLField(blank = True)

    def __str__(self):
        return self.title

class Image(models.Model):
    image = models.ImageField(upload_to='portfolio/images')
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

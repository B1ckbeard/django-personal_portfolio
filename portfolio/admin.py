from django.contrib import admin
from .models import Project, Image

class InlineImage(admin.TabularInline):
    model = Image
class ProjectAdmin(admin.ModelAdmin):
    inlines = [InlineImage]

admin.site.register(Project, ProjectAdmin)

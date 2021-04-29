from django.db import models

class Space(models.Model):
    userId = models.TextField(null=True)
    id_my = models.TextField(null=True)
    title = models.TextField(null=True)
    body = models.TextField(null=True)
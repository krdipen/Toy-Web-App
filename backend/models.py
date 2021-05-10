from django.db import models

class Space(models.Model):
    userId = models.IntegerField()
    id_my = models.IntegerField()
    title = models.TextField()
    body = models.TextField()
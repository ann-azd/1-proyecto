from django.db import models
from users.models import User
from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator

class Material(models.Model):
    titulo = models.CharField(max_length=200)
    categoria = models.CharField(max_length=100)
    descripcion = models.TextField()
    urlimage = models.ImageField(null=True, blank=True, default='/materialdf.jpg')
    cantidad = models.IntegerField(default=0)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    

    #voy a añadir que materiales pueda ser gestionado tanto por la secretaria como por el
    #vicedecano
   
        # Puedes agregar más validaciones según sea necesario
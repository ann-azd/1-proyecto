from django.db import models
from users.models import User
from materiales.models import Material

class Estudiante(models.Model):
    nombre = models.CharField(max_length=100)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    CI = models.PositiveIntegerField() # Ajusta el tipo de campo según sea necesario
    phoneinput = models.CharField(max_length=15) # Ajusta el tipo de campo según sea necesario
    anno = models.CharField(max_length=10) # Ajusta el tipo de campo según sea necesario
    grupo = models.CharField(max_length=10) # Ajusta el tipo de campo según sea necesario
    descripcion = models.TextField()
    materiales = models.ManyToManyField(Material, related_name='estudiantes')

    def __str__(self):
        return self.nombre

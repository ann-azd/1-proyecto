from django.shortcuts import render
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated # permite acceder a vistas determinadas solo si el usuario esta autenticado
from rest_framework.response import Response 
# Importa la clase Response de Django REST Framework. Response es una clase que permite construir respuestas HTTP con contenido, estados y encabezados personalizados. Es útil para devolver datos a los clientes de la API.
 
#Importa la función make_password de Django. Esta función se utiliza para crear una versión hash de una contraseña, lo cual es una práctica de seguridad importante para almacenar contraseñas de manera segura. Cuando un usuario establece o cambia su contraseña, make_password se utiliza para generar un hash de la contraseña, que luego se almacena en la base de datos en lugar de la contraseña en texto plano.
from rest_framework import status 
from .permissions import IsSecretaria
from django.shortcuts import get_object_or_404




from .models import Estudiante
from users.models import User
from .serializers import EstudianteSerializer 
from django.db import IntegrityError
from django.core.exceptions import ValidationError






# @api_view(['POST'])
# @permission_classes([IsAuthenticated,IsSecretaria])
# def postEstudiante(request):
#     data = request.data
#     estudiante = Estudiante.objects.create(
#         # 'nombre', 'usuario', 'CI', 'phoneinput', 'anno', 'grupo', 'descripcion', 'materiales']
#         nombre=data['nombre'],
#         usuario=data['usuario'],
#         phoneinput=data['phoneinput'],
#         anno=data['anno'],
#         grupo=data['grupo'],
#         descripcion=data['descripcion'],
        
#     )
#     serializer = EstudianteSerializer(estudiante, many=False)
#     return Response(serializer.data)

# @api_view(['POST'])
# @permission_classes([IsAuthenticated, IsSecretaria])
# def postEstudiante(request):
#     try:

#         serializer = EstudianteSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data, status=201)
#     except ValidationError as e:
#         return Response({"detail": str(e)}, status=400)
# Create your views here.
@api_view(['POST'])
@permission_classes([IsAuthenticated, IsSecretaria])
def postEstudiante(request):
    user_name = request.data.get('usuario')
    user = get_object_or_404(User, user_name=user_name)

    serializer = EstudianteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_materiales_estudiante(request, pk):
    # Obtener el estudiante por su ID y asegurarse de que existe
    estudiante = get_object_or_404(Estudiante, id=pk)
    
    # Obtener los materiales relacionados con el estudiante
    materiales = estudiante.materiales.all()
    
    # Construir una lista con los nombres de los materiales
    nombres_materiales = [material.titulo for material in materiales]
    
    # Devolver la lista de nombres de materiales como respuesta
    return Response(nombres_materiales)
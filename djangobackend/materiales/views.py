from django.shortcuts import render

# Create your views here.
from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated # permite acceder a vistas determinadas solo si el usuario esta autenticado
from rest_framework.response import Response 
# Importa la clase Response de Django REST Framework. Response es una clase que permite construir respuestas HTTP con contenido, estados y encabezados personalizados. Es útil para devolver datos a los clientes de la API.
 
#Importa la función make_password de Django. Esta función se utiliza para crear una versión hash de una contraseña, lo cual es una práctica de seguridad importante para almacenar contraseñas de manera segura. Cuando un usuario establece o cambia su contraseña, make_password se utiliza para generar un hash de la contraseña, que luego se almacena en la base de datos en lugar de la contraseña en texto plano.
from rest_framework import status 
from .permissions import IsVicedecano
#para devolver status 400, 401

# from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
# #te da el tokend y un token de actualizacion cuando el anterior se vencio, esto es util porque asi no hay que estar recordando al sistema usuario y contraseña cada vez que se realiza una peticion
# from rest_framework_simplejwt.views import TokenObtainPairView 
# representa una puerta a la que solo se puede acceder con el tokend 

from .models import Material
from users.models import User
from .serializers import MaterialSerializer 
from django.db import IntegrityError


@api_view(['GET'])
# @permission_classes([IsAuthenticated]) no necesita estar autenticado para acceder a los materiales estos se pueden acceder desde la pantalla de inicio
def getMateriales(request): 
    #esto es para que la tabla me muestre siempre arriba el ultimo añadido
    materiales= Material.objects.all().order_by('-id') 
    serializer = MaterialSerializer(materiales, many=True)
    return Response(serializer.data)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def getSoloMaterial(request, pk):
    material = Material.objects.get(id=pk)
    serializer = MaterialSerializer(material, many=False)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated,IsVicedecano])
def postMaterial(request):
    data = request.data
    material = Material.objects.create(
        titulo=data['titulo'],
        categoria=data['categoria'],
        descripcion=data['descripcion'],
        cantidad=data['cantidad'],
        urlimage = request.FILES.get('urlimage'), #añadi esto
        autor=request.user,
    )
    serializer = MaterialSerializer(material, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated,IsVicedecano])
def putMaterial(request, pk):
    data = request.data
    material = Material.objects.get(id=pk)
    serializer = MaterialSerializer(instance=material, data=data)
    # if material.user == request.user:
    if serializer.is_valid():
            serializer.save()
    # else:
    #     return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)
    return Response(serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated,IsVicedecano])
def deleteMaterial(request, pk):
    material = Material.objects.get(id=pk)
    material.delete()
    return Response('Material Eliminado')
    # else:
    #     return Response({'Error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)

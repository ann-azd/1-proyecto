from rest_framework import serializers
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated # permite acceder a vistas determinadas solo si el usuario esta autenticado
from rest_framework.response import Response 
# Importa la clase Response de Django REST Framework. Response es una clase que permite construir respuestas HTTP con contenido, estados y encabezados personalizados. Es útil para devolver datos a los clientes de la API.
from django.contrib.auth.hashers import make_password   
#Importa la función make_password de Django. Esta función se utiliza para crear una versión hash de una contraseña, lo cual es una práctica de seguridad importante para almacenar contraseñas de manera segura. Cuando un usuario establece o cambia su contraseña, make_password se utiliza para generar un hash de la contraseña, que luego se almacena en la base de datos en lugar de la contraseña en texto plano.
from rest_framework import status #para devolver status 400, 401

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer 
#te da el tokend y un token de actualizacion cuando el anterior se vencio, esto es util porque asi no hay que estar recordando al sistema usuario y contraseña cada vez que se realiza una peticion
from rest_framework_simplejwt.views import TokenObtainPairView 
# representa una puerta a la que solo se puede acceder con el tokend 

from .models import User
from .serializers import  UserSerializer, UserSerializerWithToken
from django.db import IntegrityError

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializers = UserSerializerWithToken(self.user).data #.data obtiene los datos serializados del objeto que se le paso al serialiador

        for token, user in serializers.items():
            data[token] = user
 #data.update(serializers) alternativo
        return data
class MyTokenObtainPairView(TokenObtainPairView): # serialzador que usara para manejar las solicitudes de tokends
    serializer_class = MyTokenObtainPairSerializer

import logging

logger = logging.getLogger(__name__)

@api_view(['POST'])
def register(request):
    serializer = UserSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    data = request.data # se extraen los datos mandados en la solicityd post
    
    try:
        user = User.objects.create(
            user_name=data['user_name'],
            first_name =data['first_name'],
            categoria =data['categoria'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except IntegrityError as e:
        return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        logger.exception("Error creating user")
        return Response({'detail': 'An unexpected error occurred: ' + str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    
@api_view(['PUT']) #para autorizar estos campos ``
@permission_classes([IsAuthenticated])
def putUser(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    user.user_name = data['user_name']
    user.bio = data['bio']
    user.first_name = data['first_name']
    user.categoria=data['categoria']
    if data['password'] != '':
        user.password = make_password(data['password'])
    user.save()
    return Response(serializer.data)

@api_view(['POST']) #para actualizar la imagen
@permission_classes([IsAuthenticated])
def uploadImage(request):
    data = request.data
    user_id = data['user_id']
    user = User.objects.get(id=user_id)
    user.image = request.FILES.get('image')
    user.save()
    return Response('Imagen subida!')

@api_view(['GET']) #muestra informacion del usuario actualmente autenticado
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated]) #obtener usuario por medio de un id
def getSoloUser(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@api_view(['GET']) #obtener todos los usuario
@permission_classes([IsAuthenticated])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
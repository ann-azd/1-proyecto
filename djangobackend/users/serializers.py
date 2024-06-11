from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import User


class UserSerializer(serializers.ModelSerializer):
    is_admin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'user_name','categoria', 
                  'is_admin', 'bio', 'first_name', 'image']
        
    def validate_categoria(self, value):
        categorias_validas = [ 'estudiante', 'secretaria', 'vicedecano']
        if value not in categorias_validas:
            raise serializers.ValidationError("La categoría proporcionada no es válida. Las categorías válidas son: %s" % ', '.join(categorias_validas))
        return value

    def get_is_admin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'user_name', 'first_name','categoria','is_admin', 'token', 'bio', 'image']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)  # este metodo genera un token 
        return str(token.access_token)      #devuelve el token como una cadena
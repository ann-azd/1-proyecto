from rest_framework import serializers
from .models import Estudiante
from users.models import User
from materiales.models import Material
from django.core.exceptions import ValidationError
from materiales.serializers import MaterialSerializer
from users.serializers import UserSerializer

class EstudianteSerializer(serializers.ModelSerializer):
   
    usuario = serializers.SlugRelatedField(
        queryset=User.objects.all(),
        slug_field='user_name'  # Asegúrate de que 'username' sea el campo que contiene el nombre de usuario en tu modelo User
    )
   
    materiales = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Material.objects.all()
    )

    class Meta:
        model = Estudiante
        fields = "__all__"



    def create(self, validated_data):
        materiales_data = validated_data.pop('materiales')
        estudiante = Estudiante.objects.create(**validated_data)
        estudiante.materiales.set(materiales_data)
        return estudiante






        # fields = ['id','nombre', 'usuario', 'CI', 'phoneinput', 'anno', 'grupo', 'descripcion', 'materiales']

    # def validate(self, data):
    #     # Validaciones personalizadas
    #     if not data.get('titulo'):
    #         raise serializers.ValidationError("El título es obligatorio.")
    #     if not data.get('categoria'):
    #         raise serializers.ValidationError("La categoría es obligatoria.")
    #     cantidad = data.get('cantidad')
    #     if cantidad is not None:
    #     # Si 'cantidad' está presente, verificar que no sea negativa
    #         if cantidad < 0:
    #             raise serializers.ValidationError("La cantidad no puede ser negativa.")
    #     else:
    #         data['cantidad'] = 0 # Asumiendo que el valor predeterminado es 0
        
    #     return data
        
    # def validate_usuario(self, value):
    #     """
    #     Check that the user exists.
    #     """
    #     try:
    #         user = User.objects.get(user_name=value)
    #     except User.DoesNotExist:
    #         raise serializers.ValidationError("User does not exist.")
    #     return user

    # def validate(self, data):
    #     materiales_ids = data.get('materiales')
    #     if materiales_ids:
    #        self.validate_materiales_exist(materiales_ids)
    #     return data


    # def validate_materiales_exist(materiales_ids):
    #     for material_id in materiales_ids:
    #         if not Material.objects.filter(id=material_id).exists():
    #            raise ValidationError(f"Material con ID {material_id} no existe.")
    
    
    # def create(self, validated_data):
    #     materiales_ids = validated_data.pop('materiales', [])
    #     estudiante = Estudiante.objects.create(**validated_data)
    #     for material_id in materiales_ids:
    #         material = Material.objects.get(id=material_id)
    #         estudiante.materiales.add(material)
    #     return estudiante
    # def create(self, validated_data):
    # # Extraer y validar el usuario
    #     usuario_data = validated_data.pop('usuario')
    #     usuario = self.validate_usuario(usuario_data)
    
    # # Extraer y procesar los materiales
    #     materiales_ids = validated_data.pop('materiales', [])
    
    # # Crear el estudiante con el usuario validado
    #     estudiante = Estudiante.objects.create(usuario=usuario, **validated_data)
    
    # # Añadir los materiales al estudiante
    #     for material_id in materiales_ids:
    #         material = Material.objects.get(id=material_id)
    #         estudiante.materiales.add(material)
    
    #     return estudiante
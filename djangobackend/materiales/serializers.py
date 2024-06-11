from rest_framework import serializers
from .models import Material
from django.core.exceptions import ValidationError

class MaterialSerializer(serializers.ModelSerializer):
    autor = serializers.CharField(source='autor.first_name', read_only=True)
    autor_image = serializers.ImageField(source='autor.image', read_only=True) #esto es para mostrar lo que retorna en json supuestamente no tiene que estar en el modelo


    class Meta:
        model = Material
        fields = "__all__"

    def validate(self, data):
        # Validaciones personalizadas
        if not data.get('titulo'):
            raise serializers.ValidationError("El título es obligatorio.")
        if not data.get('categoria'):
            raise serializers.ValidationError("La categoría es obligatoria.")
        cantidad = data.get('cantidad')
        if cantidad is not None:
        # Si 'cantidad' está presente, verificar que no sea negativa
            if cantidad < 0:
                raise serializers.ValidationError("La cantidad no puede ser negativa.")
        else:
            data['cantidad'] = 0 # Asumiendo que el valor predeterminado es 0
        
        return data

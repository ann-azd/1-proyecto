from rest_framework import permissions

class IsSecretaria(permissions.BasePermission):
   
    def has_permission(self, request, view):
        # Verifica si el usuario tiene la categoría "vicedecano"
        return request.user.categoria == 'secretaria'
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class CustomAccountManager(BaseUserManager): # esta clase es para la creacion de usuarios y superusuarios
    def create_user(self, user_name, first_name,categoria, password, **other_fields):
        # if not email:
        #     raise ValueError(_('You must provide an email address'))
        # email = self.normalize_email(email)
        user = self.model( user_name=user_name,
                          first_name=first_name,categoria=categoria, **other_fields)
        user.set_password(password) #encripta la contrasña antes de almacenarla
        user.save()
        return user

    def create_superuser(self, user_name, first_name,categoria, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        if other_fields.get('is_staff') is not True:
            raise ValueError('Superuser must be assigned to is_staff=True.') #lanza un error si no es true
        if other_fields.get('is_superuser') is not True:
            raise ValueError(
                'Superuser must be assigned to is_superuser=True.')
        return self.create_user( user_name, first_name,categoria, password, **other_fields)
    
class User(AbstractBaseUser, PermissionsMixin):
    # email       = models.EmailField(_('email address'), unique=True)
    user_name   = models.CharField(max_length=150, unique=True)
    first_name  = models.CharField(max_length=150)
    categoria = models.CharField(max_length=100, default="vicedecano")
    start_date  = models.DateTimeField(default=timezone.now)
    bio = models.TextField(_('bio'), max_length=500, blank=True)
    image       = models.ImageField(null=True, blank=True, default='/pic.jpg')
    is_staff    = models.BooleanField(default=False) #para si es admin
    is_active   = models.BooleanField(default=True)
    objects     = CustomAccountManager()
    USERNAME_FIELD = 'user_name'
    REQUIRED_FIELDS = ['first_name','categoria']
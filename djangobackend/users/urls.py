from django.urls import path
from . import views



urlpatterns = [
     path('login/', views.MyTokenObtainPairView.as_view()),
     path('register/', views.register), #le esta diciendo que lo trate como una vista
     path('put/', views.putUser),
     path('image/', views.uploadImage),
     path('userProfile/', views.getUserProfile),
     path('soloUser/<int:pk>/', views.getSoloUser),
     path('getUsers/', views.getUsers),
 
]


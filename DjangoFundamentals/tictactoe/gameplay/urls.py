from django.urls import path

from .views import game_detail, make_move, AllGamesList

urlpatterns = [
    path('<int:id>', game_detail, name="gameplay_detail"),
    path('make_move/<int:id>', make_move, name="gameplay_make_move"),
    path('all', AllGamesList.as_view())
]

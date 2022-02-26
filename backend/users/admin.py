from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from django.contrib.auth.models import Group

from .models import MyUser


class MyUserCreationForm(UserCreationForm):
    class Meta:
        model = MyUser
        fields = ["email"]


class MyUserChangeForm(UserChangeForm):
    class Meta:
        model = MyUser
        fields = ["email"]


class MyUserAdmin(UserAdmin):
    form = UserChangeForm
    add_form = UserCreationForm

    model = MyUser
    list_display = [
        "username",
        "email",
    ]
    add_fieldsets = (None, {"fields": ["username", "email", "password1", "password2"]})

    search_fields = ["username", "email"]
    ordering = ["pk"]


admin.site.register(MyUser, UserAdmin)
admin.site.unregister(Group)

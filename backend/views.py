import json
from backend.models import Space
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout

def home(request):
    if request.user.is_authenticated:
        return render(request, 'backend/home.html')
    else:
        return render(request, 'backend/signin.html')

def signin(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username = username, password = password)
        if user is not None:
            login(request, user)
        return redirect('/')
    else:
        return redirect('/error')

def signout(request):
    if request.method == 'POST':
        logout(request)
        return redirect('/')
    else:
        return redirect('/error')
    
def upload(request):
    if request.method == 'POST':
        persons = json.loads(request.FILES['file'].read())
        for person in persons:
            space = Space(userId=person['userId'], id_my=person['id'], title=person['title'], body=person['body'])
            space.save()
        return redirect('/')
    else:
        return redirect('/error')

def data(request):
    context = {'list_data': Space.objects.all()}
    return render(request, 'backend/data.html', context)
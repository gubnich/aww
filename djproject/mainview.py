from django.shortcuts import render
#from django.http import HttpResponse

def index(request):
	return render(request, "index.html")
	
def chapter2(request):
	return render(request, "chapter_2.html")

def chapter3(request):
	return render(request, "chapter_3.html")

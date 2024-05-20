from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse,StreamingHttpResponse
from API.generate import generate_file
import json
import time

title=''
description=''
chapterCount=0

@api_view(['GET'])
def hello_world(request):
    return Response({'message': 'Hello, world!'})

@api_view(['POST'])
def setBookDetails(request):
    if request.method=='POST':
        data=json.loads(request.body)
        print(data)
        title=data['title']
        description=data['description']
        chapterCount=data['chapters']
        return JsonResponse({'message':'Data received successfully'})
    
def generate(request):
    if request.method == 'GET':
        def event_stream():
            for i in range(1, 13):
                yield f"data: {json.dumps({'response_number': i})}\n\n"
                time.sleep(2)
        
        response = StreamingHttpResponse(event_stream(), content_type='text/event-stream')
        response['Cache-Control'] = 'no-cache'
        return response
    
@api_view(['GET'])
def getfinal(request):
    title='cricket game'
    description='how to play'
    chapterCount=12
    print(title,description,chapterCount)
    generate_file(title,description,chapterCount)
    return Response({'message': 'Received the data'})
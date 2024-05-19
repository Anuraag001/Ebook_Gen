import requests
from dotenv import dotenv_values
import io
from PIL import Image

def query(payload,API_KEY):
    API_URL = "https://api-inference.huggingface.co/models/Lykon/dreamshaper-7"
    headers = {"Authorization": f"Bearer {API_KEY}"}
    response = requests.post(API_URL, headers=headers, json=payload)
    return response.content

def generateImage(Request,API_KEY):
    image_bytes = query({
        "inputs": f"{Request}",
    },API_KEY)
    #image_bytes = response.content
    # Open image using PIL
    image = Image.open(io.BytesIO(image_bytes))
    #image.save('test.png')
    return image
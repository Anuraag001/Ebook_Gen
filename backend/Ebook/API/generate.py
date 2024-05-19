from API.hugchatcall import generate_response
from API.imageGen import generateImage
#from dotenv import dotenv_values
from API.doc_ import create_document,add_chapter_names,save,setCoverPage
import re

def generate_file(title,description,chapterCount):
    doc=create_document()
    #secrets=dotenv_values("cred.env")
    hfEmail="anuraagbv1@gmail.com"
    hfPass="HuggingFace01"
    result=generate_response(f"give {chapterCount} chapter names on a book '{title}' only names like 1. '...' 2.'...'",hfEmail,hfPass)
    result=str(result)
    img=generateImage(title,"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")
    img.save('test.png')
    chapter_names = re.findall(r'\d+\.\s*"([^"]+)"', result)
    setCoverPage(doc,image="test.png")
    add_chapter_names(doc,chapter_names)
    save(doc)
    print("done")

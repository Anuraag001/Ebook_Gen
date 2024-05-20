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
    result=generate_response(f'Title:"{str(title)}" Description:"{str(description)}" No of chapters:{int(chapterCount)}  Give only chapter names in numbered order',hfEmail,hfPass)
    print(result)
    result=str(result)
    img=generateImage(str(title),"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")
    img.save('test.png')
    chapter_names = re.findall(r'\d+\.\s*"([^"]+)"', result)
    print(chapter_names)
    setCoverPage(doc,image="test.png")
    add_chapter_names(doc,chapter_names)
    save(doc)
    print("done")

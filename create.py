from hugchatcall import generate_response
from imageGen import generateImage
from dotenv import dotenv_values
from doc_ import create_document,add_chapter_names,save,setCoverPage
import re

secrets=dotenv_values("cred.env")
hfEmail=secrets['Email']
hfPass=secrets['Pass']

doc=create_document()
result=generate_response("give 12 chapter names on a book 'programming languages' only names like 1. '...' 2.'...'",hfEmail,hfPass)
result=str(result)
img=generateImage("Tiger in an ocean",secrets['Token'])
img.save('test.png')
chapter_names = re.findall(r'\d+\.\s*"([^"]+)"', result)

setCoverPage(doc,image="test.png")
add_chapter_names(doc,chapter_names)
save(doc)
print("done")


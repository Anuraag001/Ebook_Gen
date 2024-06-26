from dotenv import dotenv_values,load_dotenv
from hugchat import hugchat
from hugchat.login import Login
import os

load_dotenv(os.path.join(os.path.dirname(__file__), 'cred.env'))

hfEmail = os.getenv('Email')
hfPass = os.getenv('Pass')

def generate_response(Request,Email,Pass):
    sign=Login(Email,Pass)
    cookies=sign.login()
    chatbot=hugchat.ChatBot(cookies=cookies.get_dict())
    return chatbot.chat(Request)

if __name__=='__main__':
    print(generate_response("give 12 chapter names on a book 'programming languages' ",hfEmail,hfPass))

from dotenv import dotenv_values
from hugchat import hugchat
from hugchat.login import Login

secrets=dotenv_values("cred.env")

hfEmail=secrets['Email']
hfPass=secrets['Pass']

def generate_response(Request,Email,Pass):
    sign=Login(Email,Pass)
    cookies=sign.login()
    chatbot=hugchat.ChatBot(cookies=cookies.get_dict())
    return chatbot.chat(Request)

if __name__=='__main__':
    title='game of cricket'
    description='how to play'
    chapterCount=12
    print(generate_response(f'Title:"{title}" Description:"{description}" No of chapters:{chapterCount}  Give only chapter names in numbered order',hfEmail,hfPass))

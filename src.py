import sys
import cv2
import matplotlib.pyplot as plt
from deepface import DeepFace
import pandas as pd
from IPython.display import HTML
import webbrowser

def detect_emotion(img):
    predictions = DeepFace.analyze(img,actions=['emotion'])
    return predictions['dominant_emotion']

img = cv2.imread('Source Code/data/sample.jpg')
mood = detect_emotion(img)
print(mood)

songData = pd.read_csv('Source code/data/SongList.csv')
#del songData['Link2']
del songData['Code']
del songData['Unnamed: 0']
#del songData['Unnamed: 13']
print(songData)

def run(img):
    predictions = DeepFace.analyze(img,actions=['emotion'])
    mood = predictions['dominant_emotion']
    print(mood)
    k1 = songData.loc[(songData[mood] == 1)]
    print(k1['Name'].to_string())
    i = int(input())
    path = k1['Link'][i]
    path2 = k1['Link2'][i]
    HTML('<iframe width="320" height="180" src="'+path+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    webbrowser.open_new(path2)
img = cv2.imread('Source code/data/sample.jpg')
run(img)
#not showing iframe but redirecting



#df = pd.read_csv('Song.csv')
#print(df.describe())

















# print("welcome to code")


# for i in sys.argv:
#     print(i)
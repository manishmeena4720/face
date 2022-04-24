import sys
import cv2
import matplotlib.pyplot as plt
from deepface import DeepFace
import pandas as pd
from IPython.display import HTML
import webbrowser

mood = sys.argv[1]
songData = pd.read_csv('Source code/data/SongList.csv')
del songData['Code']
del songData['Unnamed: 0']
#print(songData)
#print("entry")
def run(mood):
    #print(mood)
    k1 = songData.loc[(songData[mood] == 1)]
    #print(k1['Name'].to_string())
    #print(k1) 
    #print(type(k1))
    # names = []
    # names.append(k1['Name'].tolist())
    # names.append(k1['Link'].tolist())
    # names.append(k1['Link2'].tolist())

    json = k1.to_json()
    #print(mood)
    print(json) 
    # i = int(input())
    # path = k1['Link'][i]
    # path2 = k1['Link2'][i]
    # HTML('<iframe width="320" height="180" src="'+path+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
    # webbrowser.open_new(path2)

#print("entry2")
run(mood)
#print("entry3")
#not showing iframe but redirecting

#df = pd.read_csv('Song.csv')
#print(df.describe())
# print("welcome to code")
# for i in sys.argv:
#     print(i)
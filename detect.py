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

img = cv2.imread('image.png')
mood = detect_emotion(img)
print(mood)

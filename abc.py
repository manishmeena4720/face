import cv2
from deepface import DeepFace

faceCascade = cv2.CascadeClassifier(cv2.data.haarcascades +'haarcascade_frontalface_default.xml')

cap = cv2.VideoCapture(1)

if not cap.isOpened():
    print("hello")
    cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("hello2")
    raise IOError("Cannot open webcam")

while True:
    ret,frame = cap.read()
    result = DeepFace.analyze(frame, actions = ['emotion'],enforce_detection=False)

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = faceCascade.detectMultiScale(gray,1.1,4)

    for(x,y,w,h) in faces:
        cv2.rectangle(frame,(x,y),(x+w,y+h), (0,255,0), 2)
    
    font = cv2.FONT_HERSHEY_SIMPLEX

    cv2.putText(frame,result['dominant_emotion'],(50,50),font,3,(0,0,255),2,cv2.LINE_4)

    cv2.imshow('Live Video 🔴', frame)

    #if cv2.waitKey(2) & 0xFF == ord('q'): #press Q to quit
        #break
    #if cv2.getWindowProperty(windowName, cv2.WND_PROP_VISIBLE) <1:
        #break
        
cap.release()
cv2.destroyAllWindows()

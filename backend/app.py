from flask import Flask, jsonify
from flask_cors import CORS
import cv2
import base64

cap = cv2.VideoCapture(0)
 
app = Flask(__name__)
CORS(app)  # CORS politikalarını Flask uygulamanıza ekleyin

@app.route('/')
def hello():
    

    ret, frame = cap.read()
    ret, encoded_frame = cv2.imencode(".jpeg",frame)
    frame_base64 = base64.b64encode(encoded_frame.tobytes()).decode('utf-8')
    dizi = [1,2, frame_base64,frame_base64]
    return jsonify(dizi)  # Diziyi JSON formatında döndür

@app.route('/changestat')
def change_stat():
    return "Değer değiştirildi"  # /changestat yerine istek atıldığında bir mesaj döndür

if __name__ == '__main__':
    app.run(debug=True)

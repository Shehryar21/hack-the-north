import time
from flask import jsonify
from flask import Flask
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from flask import request

# Use the application default credentials
# Use a service account

cred = credentials.Certificate('cred.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask(__name__)

@app.route('/get_guide')
def get_guide():
    guide = request.args.get('guide')
    doc_ref = db.collection(u'guides').document(guide)
    doc = doc_ref.get()
    return json.dumps(doc.to_dict())


@app.route('/get')
def get_all_guides():
    city = request.args.get('city')
    docs = db.collection(u'guides').stream()
    ans = []
    if city:
        for doc in docs:
            if doc.to_dict()["city"] == city:
                ans.append(doc.to_dict())
    else:
        for doc in docs:
            ans.append(doc.to_dict())
    return json.dumps(ans)

@app.route('/add', methods=['POST'])
def add_guide():
    data = request.json
    doc_name = data["name"]
    db.collection(u'guides').document(doc_name).set(data)
    return json.dumps(data)


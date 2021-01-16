import time
from flask import jsonify
from flask import Flask
import json

app = Flask(__name__)

@app.route('/api')
def get_current_time():
    '''
    x =  '{ "name":"John", "age":30, "city":"New York"}'

    # parse x:
    y = json.loads(x)
    '''
    a = {'name':'Sarah', 'age': 24, 'isEmployed': True }
    return json.dumps(a)
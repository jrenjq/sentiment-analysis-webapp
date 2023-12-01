from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

@app.route("/api/")
def hello_world():
    return jsonify(hello="world")

@app.route("/api/vader/", methods=["POST"])
def get_sentiment():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        return json["ping"]
    else:
        return 'Content-Type not supported!'

@app.route("/slow/")
@limiter.limit("1 per day")
def slow():
    return ":("
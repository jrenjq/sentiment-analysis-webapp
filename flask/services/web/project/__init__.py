from flask import Flask, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

@app.route("/")
def hello_world():
    return jsonify(hello="world")

@app.route("/slow")
@limiter.limit("1 per day")
def slow():
    return ":("
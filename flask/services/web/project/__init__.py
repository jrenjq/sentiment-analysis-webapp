from flask import Flask, request, jsonify
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS

from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer

app = Flask(__name__)
CORS(app)
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://",
)

# function to print sentiments
# of the sentence.
def sentiment_scores(sentence: str) -> dict:
 
    # Create a SentimentIntensityAnalyzer object.
    sid_obj = SentimentIntensityAnalyzer()
 
    # polarity_scores method of SentimentIntensityAnalyzer
    # object gives a sentiment dictionary.
    # which contains pos, neg, neu, and compound scores.
    sentiment_dict = sid_obj.polarity_scores(sentence)
     
    # print("Overall sentiment dictionary is : ", sentiment_dict)
    # print("sentence was rated as ", sentiment_dict['neg']*100, "% Negative")
    # print("sentence was rated as ", sentiment_dict['neu']*100, "% Neutral")
    # print("sentence was rated as ", sentiment_dict['pos']*100, "% Positive")

    return {
        "negative": sentiment_dict['neg'],
        "neutral": sentiment_dict['neu'],
        "positive": sentiment_dict['pos'],
        "compound": sentiment_dict['compound']
    }

@app.route("/api/")
def hello_world():
    return jsonify(hello="world")

@app.route("/api/vader/", methods=["POST"])
def get_sentiment():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.get_json()
        given_text = str(json["text"])
        return sentiment_scores(given_text)
    else:
        return 'Content-Type not supported!'

@app.route("/slow/")
@limiter.limit("1 per day")
def slow():
    return ":("
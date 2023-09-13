import pandas as pd
from joblib import load
from price_model import HousePricePredictor
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask("House Stock")
CORS(app)
house_price_predictor = load("HousePricePredictor.pkl")


@app.route("/")
def root():
    return jsonify({"message": "House Stock Predictor running ..."}), 200


if __name__ == "__main__":
    app.run(port=8082, debug=True)

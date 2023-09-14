import pandas as pd
from joblib import load
from price_model import HousePricePredictor
from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask("House Stock")
CORS(app)
house_price_predictor = load("HousePricePredictor.pkl")


@app.route("/predict-price", methods=["POST"])
def predict_price():
    try:
        data = request.json
        data_normal = house_price_predictor.preprocess_input(data)
        price = house_price_predictor.denormalization(
            house_price_predictor.predict(data_normal)
        )

        return jsonify({"price": price[0]}), 200
    except:
        return jsonify({"error": "predictio failed"}), 400


@app.route("/")
def root():
    return jsonify({"message": "House Stock Predictor running ..."}), 200


if __name__ == "__main__":
    app.run(
        port=8082,
        debug=True,
    )

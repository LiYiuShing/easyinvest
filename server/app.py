from flask import Flask, jsonify
from flask_cors import CORS
import requests as re
import yfinance as yf
import numpy as np
import pandas as pd

app = Flask(__name__)
CORS(app)
app.run(port=5000, debug=True)

@app.route('/api/stock/info/<stockSymbol>', methods=['GET'])
def getStockInfo(stockSymbol):
    try:
        stock = yf.Ticker(stockSymbol)
        return jsonify(stock.info)
    except Exception as e:
        return jsonify({'message': 'error'})

@app.route('/api/stock/history/<stockSymbol>', methods=['GET'])
def getStockHistory(stockSymbol):
    stock = yf.Ticker(stockSymbol)
    df = stock.history(period="5y")
    df = df.to_json(date_format="iso")
    return df



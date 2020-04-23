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


@app.route('/api/market/', methods=['GET'])
def getMarket():
    dfClose = yf.download(  
        tickers = "^GSPC, ^DJI, ^IXIC, CL=F, GC=F",
        period = "5d",
        interval = "1d",
        group_by = 'ticker',
        prepost = True,
        threads = True,
        auto_adjust = True,
        proxy = None
    )

    dfOpen = yf.download(  
        tickers = "^GSPC, ^DJI, ^IXIC, CL=F, GC=F",
        period = "5d",
        interval = "1d",
        group_by = 'ticker',
        prepost = True,
        threads = True,
        auto_adjust = True,
        proxy = None
    )

    valueOpen = [('^GSPC', 'Open'), ('^DJI', 'Open'),  ('^IXIC', 'Open')]
    valueClose = [('^GSPC', 'Close'),  ('^DJI', 'Close'), ('^IXIC', 'Open')]
    newObj = {}
    for i in range (len(valueOpen)):
        open = dfClose[valueClose[i]][-2]
        close = dfClose[valueClose[i]][-1]
        change = (close - open) / open * 100
        change = round(change, 3) 
        newObj[i] = change
        
    return newObj


#FLASK_APP=main.py FLASK_ENV=development flask run

#^GSPC ^DJI ^IXIC CL=F GC=F
#S & P 500 DJIA Nasdaq Crude Oil Gold
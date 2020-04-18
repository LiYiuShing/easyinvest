import React from 'react';
import { Link } from 'react-router-dom';


import './homepage.styles.scss';
import invest from '../../assets/invest.svg';
import invest2 from '../../assets/invest2.svg'
import invest3 from '../../assets/invest3.svg'

const HomePage = () => (
    <div>
        <div className="main">
            <div className="main-overlay main-overlay-gradientVertical" />
            <div className="main-mask" />
            <div className="main-inner">
                <div className="container">
                    <div className="main-content">
                        <div className="main-content-inner">
                            <h1 className="main-title">
                                Get Easy into Investment
                            </h1>
                            <div className="main-text">
                                Live quotes, stock charts and expert trading ideas. 
                                EasyInvest is a social network for traders and investors on Stock, Futures and Forex markets! 
                            </div>
                            <div className="main-wrapper">
                                <Link to="/signin" className="main-button">User Sign In</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="example section">
            <div className="container">
                <h3>
                    Understand the trend of US Market, Stocks and More.... . 
                </h3>
                <p>
                    The stock market, just like the price of individual stocks, tends to trend. ... Uptrends are characterized by prices making higher highs and higher lows. Downtrends are characterized by lower price highs and lower price lows.
                </p>
                <p>
                    The stock market, just like the price of individual stocks, tends to trend. ... Uptrends are characterized by prices making higher highs and higher lows. Downtrends are characterized by lower price highs and lower price lows.
                </p>
                <p>
                    The stock market, just like the price of individual stocks, tends to trend. ... Uptrends are characterized by prices making higher highs and higher lows. Downtrends are characterized by lower price highs and lower price lows.
                </p>
                <p>
                    The stock market, just like the price of individual stocks, tends to trend. ... Uptrends are characterized by prices making higher highs and higher lows. Downtrends are characterized by lower price highs and lower price lows.
                </p>
                <p>
                    The stock market, just like the price of individual stocks, tends to trend. ... Uptrends are characterized by prices making higher highs and higher lows. Downtrends are characterized by lower price highs and lower price lows.
                </p>
            </div>
        </div>

        <div className="card section">
            <div className="container">
                <div className="card-inner">
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest} className="card-image"/>
                        </div>
                        <h4>A Basic Stock Platform</h4>
                        <p className="card-text">
                            EasyInvest is designed to give investor a basic of stock data through the differnet graphs analysis.
                        </p>
                    </div>
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest2} className="card-image"/>
                        </div>
                        <h4>React</h4>
                        <p className="card-text">
                            EasyInvest is designed to give investor a basic of stock data through the differnet graphs analysis.

                        </p>
                    </div>
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest3} className="card-image"/>
                        </div>
                        <h4>Redux</h4>
                        <p className="card-text">
                            EasyInvest is designed to give investor a basic of stock data through the differnet graphs analysis.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="other section">
            <div className="container">
                <div className="other-inner">
                    <div className="other-box">
                        <div className="other-title">Stock</div>
                        <p className="other-text">Get the latest stock market news, stock information & quotes, data analysis reports, as well as a general overview of the market landscape from Nasdaq.</p>
                        <Link to="/" className="main-button">Explore More</Link>
                    </div>
               
                    <div className="other-box">
                        <div className="other-title">Cryptocurrency</div>
                        <p className="other-text">Explore the top 50 cryptocurrencies with Coinbase, including cryptocurrency price charts, crypto descriptions, and the latest price of Bitcoin and Ethereum.</p>
                        <Link to="/" className="main-button">Explore More</Link>
                    </div>

                    <div className="other-box">
                        <div className="other-title">Futures</div>
                        <p className="other-text">Get the latest data from stocks futures of major world indexes. Find updated quotes on top stock market index futures.</p>
                        <Link to="/" className="main-button">Explore More</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default HomePage;
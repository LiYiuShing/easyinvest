import React from 'react';

import './homepage.styles.css';
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
                                sds
                            </h1>
                            <div className="main-text">
                                isdsadas sadsadasdsadassadsadsadas
                                sadsadasdsadassadsadsadasasdasd
                                sadsadasdsadassadsadsadas
                                asdsadsadsadasdsa
                                sadsadsadasdas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="card section">
            <div className="container">
                <h2>
                    Hello World！
                </h2>
            </div>
            <div className="container">
                <div className="card-inner">
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest} className="card-image"/>
                        </div>
                        <h4>Card 1</h4>
                        <p className="card-text">
                            Card1 content
                        </p>
                    </div>
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest2} className="card-image"/>
                        </div>
                        <h4>Card 2</h4>
                        <p className="card-text">
                            Card2 content
                        </p>
                    </div>
                    <div className="card-item">
                        <div className="card-media">
                            <img alt="" src={invest3} className="card-image"/>
                        </div>
                        <h4>Card 3</h4>
                        <p className="card-text">
                            Card3 content
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="other section">
            <div className="container">
                <div className="other-inner">
                    <div className="other-title">
                        <h3>
                            sdasd
                        </h3>
                    </div>
                    <div className="other-text">
                        sadsadsadsadksa
                    </div>
                </div>
            </div>
        </div>

    </div>
);

export default HomePage;
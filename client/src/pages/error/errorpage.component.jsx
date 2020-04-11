import React from 'react';
import './errorpage.styles.scss';
import { Link } from 'react-router-dom';

export const _404 = () => (
    <section className="container">
        <div className='notfound'>
            <h1>404 </h1>
            <h2>OOPS! PAGE NOT BE FOUND :(</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
            <Link to='/'>Back to homepage</Link>
        </div>
    </section>
);
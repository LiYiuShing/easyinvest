import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

import Search from '../search/search.component';

import './header.styles.scss';

const Header = ({ currentUser, signOutStart}) => {


    return (
        <nav>
            <div className="nav-content">
                <div className="nav-row">
                    <a href="/" className="logo-container">
                        <FontAwesomeIcon color="#0c0514" size="2x" icon={faChild} />ICON
                    </a>
                    <ul className="nav-links right">
                        <li className="nav-link text-link">
                            <Link
                                to={'/'}
                                style={{ textDecoration: "none" }}
                            > 
                                About 
                            </Link>
                        </li>
                        <li className="nav-link text-link">
                            <Link
                                to={'/'}
                                style={{ textDecoration: "none" }}
                            > 
                                Market 
                            </Link>
                        </li>
                        <li className="nav-link text-link">
                            <Link
                                to={'/'}
                                style={{ textDecoration: "none" }}
                            > 
                                Stock 
                            </Link>
                        </li>
                        <li className="nav-link text-link">
                            { currentUser ? (
                                <div onClick={signOutStart}>
                                    SignOut
                                </div>
                            ) : (
                                <Link 
                                    style={{ textDecoration: "none" }}
                                    to={'/signin'}
                                >
                                    SignIn
                                </Link>
                            )
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
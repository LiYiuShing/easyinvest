import React from 'react';
import { connect } from 'react-redux';

import './signin.styles.scss';

import { googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart }) => {
    return (
        <div>
            <div className="google-btn" onClick={googleSignInStart}>
                <div className="google-icon-wrapper">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
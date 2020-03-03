import React from 'react';
import { connect } from 'react-redux';

import './signin.styles.scss';

import { googleSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ googleSignInStart }) => {
    return (
        <div>
            <div class="google-btn" onClick={googleSignInStart}>
                <div class="google-icon-wrapper">
                    <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p class="btn-text"><b>Sign in with google</b></p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
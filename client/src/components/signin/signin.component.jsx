import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

import TextField from '@material-ui/core/TextField';

import Logo from "../../assets/sorry.jpg";
import './signin.styles.scss';

import { googleSignInStart } from '../../redux/user/user.actions';
import { spawn } from 'redux-saga/effects';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0,0,0, 0.54)'
  },
  gridroot: {
    padding: '7px',
    margin: '20px 10px'
  },
  title: {
    fontSize: 22,
    color: 'rgba(0,0,0, 0.75)'
  },
  pos: {
    marginBottom: 12,
  },
  policy: {
    backgroundColor: '#EEEEEE',
    padding: 14,
    color: 'rgba(0,0,0, 0.54)'
  },
  signup: {
    backgroundColor: '#0c0514',
    color: '#fff',
    padding: 14,
    fontSize: 14,
  }
});

const GoogleLogin = ({ googleSignInStart }) => {
    return(
        <div className="google-btn" onClick={googleSignInStart}>
            <div className="google-icon-wrapper">
                <img className="google-icon" alt="" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p className="btn-text"><b>Sign in with google</b></p>
        </div>
    )
}


const SignIn = () => {
    const classes = useStyles();

    return (
      <div className="container">
        <Grid container md={12} className={classes.gridroot}>
          <Grid md={7} sm={6} container>
            <Grid>
                Ahhhhhhhhhhhhhhhhhhhhhhhhhh ~~~~~~~~~~~~~~~~~~~
                <Grid><img src={Logo} /></Grid>
                <Typography>AAAAAAAAAAAAAAAAAAAAAAAAA</Typography>
                <Typography>bbbbbbbbbbbbbbbbbb</Typography>
                <spwn>CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC</spwn>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <span>sdasdsadsadsadsadsad</span>
            </Grid>
          </Grid>
          <Grid md={3} sm={4}>
            <Card className={classes.root}>
              <CardContent>
                <Grid>
                    <FontAwesomeIcon color="#0c0514" size="4x" icon={faChild} />
                    <Grid
                        className={classes.title}
                    >
                    <span> Sign In </span>
                    </Grid>
                    <br></br>
                    <Grid align='center'>
                        <GoogleLogin /> 
                    </Grid>
                    <br></br>
                    <Grid align='center'>
                        or
                    </Grid>
                    <br></br>
                    <TextField
                        id="standard-textarea"
                        label="Email"
                        placeholder="yours@example.com"
                        multiline
                    />
                    <TextField
                        id="standard-textarea"
                        label="Password"
                        placeholder="your password"
                        multiline
                    />
                </Grid>
                <br></br>
                <span>Don’t have an account? Sign up</span>
              </CardContent>
              <Grid className={classes.policy}>
                By signing in, you agree to our terms of service and privacy
                policy.
              </Grid>
              <Grid className={classes.signup}>SIGN IN ></Grid>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn)
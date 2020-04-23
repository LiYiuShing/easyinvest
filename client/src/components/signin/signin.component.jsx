import React from 'react';
import GoogleLogin from './googlelogin.compoent'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChild } from "@fortawesome/free-solid-svg-icons";

import TextField from '@material-ui/core/TextField';

import './signin.styles.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    textAlign: 'center',
    fontSize: 12,
    color: 'rgba(0,0,0, 0.54)',
  },
  gridroot: {
    padding: '7px',
    margin: '20px 10px ;'
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

const SignIn = () => {
    const classes = useStyles();

    return (
      <div className="container">
        <Grid container md={12} className={classes.gridroot} item>
          <Grid md={7} sm={6} container item>
            <Grid>
              <h2>Welcome To EasyInvest</h2>
              <ul className="sign-in-ul">
                <li className="sign-in-li">Explore the stock market</li>
                <li className="sign-in-li">To track your favorite symbols across the site, log in or create an account.</li>
                <li className="sign-in-li">You will need to reset your password for your first log in by clicking <span className="sign-in-link ">FORGOT PASSWORD</span>.</li>
              <li className="sign-in-li alert">SIGNIN AND SIGNUP ONLY AVAILABLE GOOLGE LOGIN NOW</li>
              </ul>
            </Grid>
          </Grid>
          <Grid md={3} sm={4} item>
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
                <span>Don’t have an account? <span className="sign-in-link">Sign up</span></span>
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

export default SignIn
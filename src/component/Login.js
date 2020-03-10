import React from 'react';
import { homedir } from 'os';
import { reg } from './Reg';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Redirect } from 'react-router-dom'

import {connect} from "react-redux";
import {Signin} from "./../action/auth";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Email: 'Luke Skywalker',
      Password: '19BBY',
      error: '',
      loggedIn: false,
    }

    this.Password = this.Password.bind(this);
    this.Email = this.Email.bind(this);
    this.login = this.login.bind(this);
  }

   redClass = {
    'color': 'red'
  }


  Email(event) {
    this.setState({ Email: event.target.value })
  }

  Password(event) {
    this.setState({ Password: event.target.value })
  }

  login(event) {

    if (!this.state.Email) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.Password) {
      return this.setState({ error: 'Password is required' });
    }
    this.setState({ error: '' });
    fetch('https://swapi.co/api/people/', {
      method: 'get',
      datatype: 'json',
    }).then((Response) => Response.json())
      .then((result) => {
        var checkeduser = result.results.filter(checkuser => checkuser.name.trim() == this.state.Email.trim() && checkuser.birth_year == this.state.Password);
        if (checkeduser.length == 1) {
          localStorage.setItem("Logged_username", checkeduser[0].name);
          this.props.loginhnadle(result.Status);

        }
        else
          return this.setState({ error: 'invalid  user' });
      })
     
  }



  render() {
    const classes = makeStyles(theme => ({
        paper: {
          marginTop: theme.spacing(8),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      }));
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
           
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={this.state.Email}
                onChange={(e)=>this.setState({Email:e.target.value})}
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={this.state.Password}
                onChange={(e)=>this.setState({Password:e.target.value})}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              
              <a onClick={this.login} className="btn btn-primary btn-user btn-block">
              Sign In
                  </a>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                
              </Grid>
            </form>
          </div>
          
        </Container>
      );


  }

}

const mapStateToProps = ({auth}) =>{
    const {loggedIn} = auth;
    return {loggedIn}
}
export default connect(mapStateToProps,{Signin})(Login);

import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Pomo from './components/Pomo'
import Grid from '@material-ui/core/Grid';
import Quizlet from './components/Quizlet';
import Panel from './components/Panel';
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Paper from '@material-ui/core/Paper';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
// import './Styles/App.css';
var firebaseui = require('firebaseui');

firebase.initializeApp({
  apiKey: 'AIzaSyD1OtCoO2em2sBOiv0pkC4nkndReovwCdk',
  authDomain: 'studyflow-web.firebaseapp.com'
})

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Source Sans Pro"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

class App extends Component {

  state = { isSignedIn : false }
  uiConfig = {
    callbacks: {
      signInSuccess: () => false
      // signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        // return true;
      // },
      // uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        // document.getElementById('loader').style.display = 'none';
      // }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ]
  }

  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }

  // Start normal app
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>


          <NavBar />

          <Grid container sm={12}>

            <Grid item sm={6}>
              <Pomo />
              {this.state.isSignedIn ? (
                <Paper elevation={3}>
                  <div class="container">
                    <div class="relative">
                      Poke
                    </div>
                  </div>
                </Paper>
              ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
              )}
            </Grid>

            <Grid item sm={6}>
              <Panel />
            </Grid>

          </Grid>

        </div>
      </ThemeProvider>
    )
  }
}
export default App

import React from 'react'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

var firebaseui = require('firebaseui');

const SignIn = () => {
    return(
        <div>
            {this.state.isSignedIn ? (
                <div>Signed In!</div>
            ) : (
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
                />
            )}
        </div>
    )
}
export default SignIn;
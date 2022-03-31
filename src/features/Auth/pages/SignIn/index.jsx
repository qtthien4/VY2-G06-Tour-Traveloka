import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';


// Configure FirebaseUI.
const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'redirect',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/activities'
   
  };

function SignIn(){
    return (
        <div>
            <div className='text-center'>
                <h2>Login Form</h2>
                <p>or login with social account</p>
            </div>
            <div>
    
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
        </div>
    )
}

export default SignIn

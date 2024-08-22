import React from 'react';
import './LoginSignup.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';

// Add your additional imports here
const SignIn = () => {
  const { instance } = useMsal();

const LoginSignup = (provider) => {
  instance.loginRedirect({
    ...loginRequest,
    authority: `https://<safezoneprojectoutlook>.b2clogin.com/<safezoneprojectoutlook>.onmicrosoft.com/B2C_1_${provider}`,
  });
};

return (
  <div className="sign-in-container">
    <button onClick={() => LoginSignup("google")}>Google</button>
    <button onClick={() => LoginSignup("microsoft")}>Microsoft</button>
    <button onClick={() => LoginSignup("facebook")}>Facebook</button>

    <div>
      <input type="email" placeholder="Email Address" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
    </div>

    <div>
      <a href="#">Forgot your password?</a>
    </div>

    <div>
      <a href="#">Don't have an account? Sign up now</a>
    </div>
  </div>
);
};
export default SignIn;
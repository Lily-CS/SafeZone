import React from 'react';
import './LoginSignup.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from '../../config/authConfig';


const LoginSignup = () => {
  const { instance } = useMsal();

  const handleLogin = (provider) => {
    instance.loginRedirect({
      ...loginRequest,
      authority: `https://<safezoneprojectoutlook>.b2clogin.com/<safezoneprojectoutlook>.onmicrosoft.com/B2C_1_${provider}`,
    });
  };

  return (
    <div className="sign-in-container">
      <button onClick={() => handleLogin("google")}>Google</button>
      <button onClick={() => handleLogin("microsoft")}>Microsoft</button>
      <button onClick={() => handleLogin("facebook")}>Facebook</button>

      <div>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default LoginSignup;

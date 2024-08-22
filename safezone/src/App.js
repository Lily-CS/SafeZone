import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import SignIn from './Components/LoginSignup/LoginSignup';
import { useMsal } from "@azure/msal-react";
import { useEffect } from 'react';

function App() {
  const { instance } = useMsal();

  useEffect(() => {
    instance.handleRedirectPromise().then((authResponse) => {
      if (authResponse) {
        console.log("Authentication successful", authResponse);
        // You can store the authResponse or update the app state as needed
      }
    }).catch((error) => {
      console.error("Authentication error", error);
    });
  }, [instance]);


  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
  AmplifySignOut,
} from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);

const App = () => {
  const [authState, setAuthState] = useState<null | AuthState>(null);
  const [user, setUser] = useState<null | any>(null);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState: AuthState, authData: any) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  console.log(JSON.stringify(user));

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
    </div>
  ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" },
        ]}
      />
    </AmplifyAuthenticator>
  );
};

export default App;

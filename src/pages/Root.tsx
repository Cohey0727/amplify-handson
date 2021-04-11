import React, { useEffect, useState } from "react";
import { renderRoutes, RouteConfigComponentProps } from "react-router-config";
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
import AuthData from "../types/authData";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";

type OwnProps = {};
type Props = OwnProps & RouteConfigComponentProps;

const Root: React.FC<Props> = ({ route }) => {
  const [authState, setAuthState] = useState<null | AuthState>(null);
  const [user, setUser] = useState<null | AuthData>(null);

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState: AuthState, authData: any) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      <div>Hello, {user.username}</div>
      <AmplifySignOut />
      {renderRoutes(route?.routes!)}
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

export default Root;

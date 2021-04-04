export default interface User {
  username: string;
  pool: Pool;
  Session: any;
  client: Client2;
  signInUserSession: SignInUserSession;
  authenticationFlowType: string;
  storage: UserStorage;
  keyPrefix: string;
  userDataKey: string;
  attributes: Attributes;
  preferredMFA: string;
}

export interface Pool {
  userPoolId: string;
  clientId: string;
  client: Client;
  advancedSecurityDataCollectionFlag: boolean;
  storage: Storage;
}

export interface Client {
  endpoint: string;
  fetchOptions: FetchOptions;
}

export interface FetchOptions {}

export interface UserStorage {
  redux: string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.clockDrift": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.idToken": string;
  projectUsers: string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.refreshToken": string;
  "amplify-signin-with-hostedUI": string;
  "src/pages/projects/context/ProjectTermContext/termId": string;
  "@@auth0spajs@@::nka3oEVoosfk7zktCynBSDWFx45H9oQO::default::openid profile email offline_access": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.accessToken": string;
  "src/pages/projects/context/ProjectContext/projectId": string;
  "authenticationStorageKey/email": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.userData": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.LastAuthUser": string;
}

export interface Client2 {
  endpoint: string;
  fetchOptions: FetchOptions2;
}

export interface FetchOptions2 {}

export interface SignInUserSession {
  idToken: IdToken;
  refreshToken: RefreshToken;
  accessToken: AccessToken;
  clockDrift: number;
}

export interface IdToken {
  jwtToken: string;
  payload: Payload;
}

export interface Payload {
  sub: string;
  aud: string;
  email_verified: boolean;
  event_id: string;
  token_use: string;
  auth_time: number;
  iss: string;
  "cognito:username": string;
  exp: number;
  iat: number;
  email: string;
}

export interface RefreshToken {
  token: string;
}

export interface AccessToken {
  jwtToken: string;
  payload: Payload2;
}

export interface Payload2 {
  sub: string;
  event_id: string;
  token_use: string;
  scope: string;
  auth_time: number;
  iss: string;
  exp: number;
  iat: number;
  jti: string;
  client_id: string;
  username: string;
}

export interface Storage2 {
  redux: string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.clockDrift": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.idToken": string;
  projectUsers: string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.refreshToken": string;
  "amplify-signin-with-hostedUI": string;
  "src/pages/projects/context/ProjectTermContext/termId": string;
  "@@auth0spajs@@::nka3oEVoosfk7zktCynBSDWFx45H9oQO::default::openid profile email offline_access": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.accessToken": string;
  "src/pages/projects/context/ProjectContext/projectId": string;
  "authenticationStorageKey/email": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.kohei.userData": string;
  "CognitoIdentityServiceProvider.3lmj5dpdbl9blovhfsh9hsvq0.LastAuthUser": string;
}

export interface Attributes {
  sub: string;
  email_verified: boolean;
  email: string;
}

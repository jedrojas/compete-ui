import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';

import { FRONTEND_ENDPOINT } from '../../config';

export interface IAuthProvider {}

export const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-k8hhju21.us.auth0.com"
      clientId="fLBBvmcNhEQ90Vm739qxFhsSMDjGvdss"
      redirectUri={`${FRONTEND_ENDPOINT}/dashboard`}
      audience="https://dev-k8hhju21.us.auth0.com/api/v2/"
      scope="read:current_user update:current_user_metadata read:users read:user_idp_tokens"
    >
      {children}
    </Auth0Provider>
  );
};

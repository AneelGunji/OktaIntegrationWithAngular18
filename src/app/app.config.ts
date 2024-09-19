import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import OktaAuth, { OktaAuthOptions } from '@okta/okta-auth-js';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';


const oktaConfig: OktaAuthOptions  = {
  issuer: 'https://dev-kazhnt7br0rznvpq.us.auth0.com/oauth2/default',
  clientId: 'njlhIfJPr6pnvnB41ZlgaacaEthm8vjw',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email', 'offline_access'],
  pkce: false,
};


export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      OktaAuthModule
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    { provide: OKTA_CONFIG, useValue:{oktaAuth: new OktaAuth(oktaConfig)}}]
};

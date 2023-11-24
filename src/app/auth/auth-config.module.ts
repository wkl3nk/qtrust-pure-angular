import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
              authority: 'https://simulator.home-connect.com/security/oauth/authorize',
              authWellknownEndpoints: {
                authorizationEndpoint: 'https://simulator.home-connect.com/security/oauth/authorize',
                tokenEndpoint: 'https://simulator.home-connect.com/security/oauth/token',
              },
              redirectUrl: window.location.origin,
              postLogoutRedirectUri: window.location.origin,
              clientId: '14E43564588D1580179C0A8D68F3E053DC1955915759BC69A73C5A75D77E1DE1',
              scope: 'Dishwasher', // 'openid profile offline_access ' + your scopes
              responseType: 'code',
              silentRenew: true,
              useRefreshToken: true,
              renewTimeBeforeTokenExpiresInSeconds: 30,
          }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}

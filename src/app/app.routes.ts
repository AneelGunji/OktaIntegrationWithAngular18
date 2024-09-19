import { Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'login/callback', component: OktaCallbackComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] },
    { path: 'about', component: AboutComponent, canActivate: [OktaAuthGuard] },
  ];

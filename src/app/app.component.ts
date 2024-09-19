import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { filter, map } from 'rxjs';
import { AuthState } from '@okta/okta-auth-js';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private oktaStateService = inject(OktaAuthStateService);
  private oktaAuth = inject(OKTA_AUTH);
  
    constructor() {}
    public isAuthenticated$ = this.oktaStateService.authState$.pipe(
      filter((s: AuthState) => !!s),
      map((s: AuthState) => s.isAuthenticated ?? false)
    );
  
    public async signIn() : Promise<void> {
      await this.oktaAuth.signInWithRedirect();
    }
  
    public async signOut(): Promise<void> {
      await this.oktaAuth.signOut();
    }
}

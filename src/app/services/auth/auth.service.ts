import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urlJoin } from 'url-join-ts';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
  ) { }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    let session = {
      email: 'john.doe@mail.com'
    }

    return false;
    // return session;
  }

  // Sign in
  signIn(username: string, password: string): Observable<any> {
    // Sample only - remove this after real authentication / session
    // let sample_user = {
    //   username: username,
    //   password: password
    // }

    const url = urlJoin(environment.apiUrl, "v1/auth/login");
    return this.httpClient.post(url, {
      username: username,
      password: password,
      LoginType: 2,
    });

    // return sample_user;
  }

  // Sign up
  async signUp(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    let sample_user = {
      email: email,
      password: password
    }

    return sample_user;
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urlJoin } from 'url-join-ts';
import { BaseReponse, BaseReponseModel } from '../../models/base-response.model';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dataService: DataService

  ) { }

  // Get user session
  async getSession() {
    const accessToken = await this.dataService.get('access_token');
    console.log(accessToken);
    return accessToken;
  }

  async setSession(token) {
    await this.dataService.set('access_token', token);
  }

  // Sign in
  signIn(username: string, password: string): Observable<any> {
    const url = urlJoin(environment.apiUrl, "v1/auth/token");
    return this.httpClient.post(url, {
      ClientId: 'smas3',
      ClientSecret: '0aCpNK1F6Kssk4yhtJfbLA==',
    });
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    await this.dataService.clear();
    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
  }
}

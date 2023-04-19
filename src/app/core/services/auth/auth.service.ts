import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { urlJoin } from 'url-join-ts';
import { BaseReponse, BaseReponseModel } from '../../models/base-response.model';
import { DataService } from '../data/data.service';
import jwt_decode from 'jwt-decode';
import { StoreageKeyConstants } from '../../constants/storage-key.constants';
import { DecodeTokenDto } from '../../models/auth/decode-token.model';
import { UserDataDto } from '../../models/auth/user-data.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router,
    private httpClient: HttpClient,
    private dataService: DataService

  ) { }

  private _decodeToken$ = new BehaviorSubject<DecodeTokenDto>(null);
  private _currentUser$ = new BehaviorSubject<UserDataDto>(null);
  get currentUser(): UserDataDto {
    return this._currentUser$.value;
  }

  get currentUser$() {
    return this._currentUser$.asObservable();
  }

  async isAuthenticated() {
    const token = await this.getToken();
    if (token) {
      try {
        const decodeToken = <DecodeTokenDto>jwt_decode(token);
        this._decodeToken$.next(decodeToken);
        const userData = JSON.parse(decodeToken.UserData);
        this._currentUser$.next(userData);
        return true;
      } catch (error) {
        return false;
      }

    }
    return false;
  }

  async getToken() {
    const accessToken = await this.dataService.get(StoreageKeyConstants.AccessToken);
    return accessToken;
  }

  async setToken(token) {
    await this.dataService.set(StoreageKeyConstants.AccessToken, token);
  }

  // Sign in
  signIn(username: string, password: string): Observable<any> {
    const url = urlJoin(environment.apiUrl, "v1/auth/login");
    return this.httpClient.post(url, {
      username: username,
      password: password,
      LoginType: 2
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

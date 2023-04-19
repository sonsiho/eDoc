import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { UserDataDto } from 'src/app/core/models/auth/user-data.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  _currentUser$: Observable<UserDataDto>;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this._currentUser$ = this.authService.currentUser$;
  }

  // Sign out
  signOut() {
    this.authService.signOut();
  }

}

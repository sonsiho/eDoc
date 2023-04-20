import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataDto } from 'src/app/core/models/auth/user-data.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.page.html',
  styleUrls: ['./other.page.scss'],
})
export class OtherPage implements OnInit {

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

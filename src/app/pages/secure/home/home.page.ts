import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataDto } from 'src/app/core/models/auth/user-data.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentUser$: Observable<UserDataDto>;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.currentUser$ = this.authService.currentUser$;

  }

  handleRefresh(event) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  };
}

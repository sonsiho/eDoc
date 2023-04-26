import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDataDto } from 'src/app/core/models/auth/user-data.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { BiometricService } from 'src/app/core/services/biometric/biometric.service';
import { FcmService } from 'src/app/core/services/fcm/fcm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentUser$: Observable<UserDataDto>;
  countNotifications = 0;
  constructor(private authService: AuthService,
    private fcmService: FcmService) { }

  async ngOnInit() {
    this.currentUser$ = this.authService.currentUser$;
    this.fcmService.deliveredNotifications$.subscribe(res => {
      this.countNotifications = res?.notifications?.length || 0;
    });
  }

  async handleRefresh(event) {
    await this.ngOnInit();
    event.target.complete();
    (await this.authService.fetchUser()).subscribe(res => {
      console.log(res);

    })

  };
}

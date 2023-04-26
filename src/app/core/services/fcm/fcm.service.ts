import { Injectable } from '@angular/core';
import { Capacitor, PermissionState } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  public currentToken$ = new BehaviorSubject(null);
  public get deliveredNotifications$(){
    return from(PushNotifications.getDeliveredNotifications());
  }
  constructor() { }

  public async registerPush() {

    await this.registerNotifications();

    await this.addListeners();
  }

  addListeners = async () => {
    await PushNotifications.addListener('registration', token => {
      this.currentToken$.next(token.value);
    });

    await PushNotifications.addListener('registrationError', err => {
      console.error('Registration error: ', err);
    });

    await PushNotifications.addListener('pushNotificationReceived', notification => {
      console.log('Push notification received: ', notification);
    });

    await PushNotifications.addListener('pushNotificationActionPerformed', notification => {
      console.log('Push notification action performed', notification);
    });
  }

  registerNotifications = async () => {
    let permStatus = await PushNotifications.checkPermissions();

    if (permStatus.receive === 'prompt') {
      permStatus = await PushNotifications.requestPermissions();
    }

    if (permStatus.receive !== 'granted') {
      throw new Error('User denied permissions!');
    }

    await PushNotifications.register();
  }
}

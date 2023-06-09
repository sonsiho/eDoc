import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(
    public toastController: ToastController
  ) { }

  async error(message) {
    await this.presentToast('Error', message, 'top', 'danger', 2000);
  }

  async info(message) {
    await this.presentToast('Info', message, 'top', 'info', 2000);
  }

  async presentToast(header: string, message: string, position: any, color: string, duration: number, icon?: string) {

    if (!icon) {
      switch (color) {
        case 'success':
          icon = 'checkmark-outline';
          break;
        case 'medium':
          icon = 'information-circle-outline';
          break;
        case 'danger':
          icon = 'warning-outline';
          break;
      }
    }

    const toast = await this.toastController.create({
      header: header,
      message: message,
      duration: duration,
      position: position,
      color: color,
      icon: icon,
      translucent : true,
      animated:true
    });

    await toast.present();
  }
}

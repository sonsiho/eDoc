import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private loadingController: LoadingController) { }

  async show(message = 'Đang xử lý...') {
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: message,
      spinner: 'crescent',
      translucent: true,
      animated: true,
    });
    await loading.present();
  }

  async hide() {
    await this.loadingController.dismiss();
  }
}

import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { Router } from '@angular/router';
import { BaseReponseModel } from 'src/app/core/models/base-response.model';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  current_year: number = new Date().getFullYear();

  signin_form: FormGroup;
  submit_attempt: boolean = false;

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {

    // Setup form
    this.signin_form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });

    // DEBUG: Prefill inputs
    this.signin_form.get('username').setValue('');
    this.signin_form.get('password').setValue('');
  }

  // Sign in
  async signIn() {

    this.submit_attempt = true;

    // If email or password empty
    if (this.signin_form.value.username == '' || this.signin_form.value.password == '') {
      this.toastService.presentToast('Error', 'Please input email and password', 'top', 'danger', 2000);
      return;
    }

    // Proceed with loading overlay
    const loading = await this.loadingController.create({
      cssClass: 'default-loading',
      message: 'Đang xử lý...',
      spinner: 'crescent'
    });
    await loading.present();

    // TODO: Add your sign in logic
    // ...

    this.authService.signIn(this.signin_form.value.username, this.signin_form.value.password)
      .subscribe(
        {
          complete: () => {
            loading.dismiss();
          },
          error: (err) => {
            this.toastService.presentToast('Error', JSON.stringify(err), 'top', 'danger', 2000);
            loading.dismiss();
          },
          next: async (res: BaseReponseModel<any>) => {
            if (res.success) {
              await this.authService.setSession(res.data.token);
              await this.router.navigate(['/home']);
            } else {
              this.toastService.presentToast('Error', res.message, 'top', 'danger', 2000);
              return;
            }
          },
        });
  }

}

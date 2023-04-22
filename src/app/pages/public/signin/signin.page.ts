import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { Router } from '@angular/router';
import { BaseReponseModel } from 'src/app/core/models/base-response.model';
import { Storage } from '@ionic/storage-angular';
import { SpinnerService } from 'src/app/core/services/spinnner/spinner.service';
import { BiometricService } from 'src/app/core/services/biometric/biometric.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  signinForm: FormGroup;
  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private biometricService : BiometricService
  ) { }

  async ngOnInit() {

    // Setup form
    this.signinForm = this.formBuilder.group({
      username: ['hcm_thcs_viettel11b', Validators.compose([Validators.required])],
      password: ['12345678aA@', Validators.compose([Validators.required])]
    });

  }

  message: string = '';
  // Sign in
  async signIn() {

    this.message = '';

    // If email or password empty
    if (this.signinForm.value.username == '' || this.signinForm.value.password == '') {
      this.toastService.error('Chưa nhập tài khoản or mật khẩu');
      return;
    }

    this.spinnerService.show();
    this.authService.signIn(this.signinForm.value.username, this.signinForm.value.password)
      .subscribe(
        {
          complete: async () => {
            await this.spinnerService.hide();
          },
          error: async (err) => {
            this.toastService.error(JSON.stringify(err));
            await this.spinnerService.hide();
          },
          next: async (res: BaseReponseModel<any>) => {
            console.log(res);
            if (res.success) {
              await this.authService.setToken(res.data.token);
              await this.router.navigate(['/home']);
            } else {
              this.message = res.message;
            }
          },
        });
  }

}

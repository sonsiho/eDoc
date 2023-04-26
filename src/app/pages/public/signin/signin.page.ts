/* eslint-disable @typescript-eslint/member-ordering */
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { BaseReponseModel } from 'src/app/core/models/base-response.model';
import { AlertService } from 'src/app/core/services/alert/alert.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { BiometricService } from 'src/app/core/services/biometric/biometric.service';
import { SpinnerService } from 'src/app/core/services/spinnner/spinner.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { format,setDefaultOptions } from 'date-fns'
import { vi } from 'date-fns/locale'
setDefaultOptions({ locale: vi });

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit, AfterViewInit {

  get currentTime() {
    return format(new Date(),'kk:mm');
  }

  get currentDate() {
    const dateNow = new Date();

    return `${format(dateNow,'cccc')} , ${format(dateNow,'d')} tháng ${format(dateNow,'M')} năm ${format(dateNow,'yyyy')}`;;
  }

  isLoading = false;
  @ViewChild('logonIcon') logonIconRef: ElementRef;
  signinForm: FormGroup;
  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router,
    private biometricService: BiometricService,
    private alertService: AlertService,
    private animationCtrl: AnimationController
  ) { }

  ngAfterViewInit(): void {
  }

  async ngOnInit() {

    this.isLoading = false;

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

    await this.processLogin(this.signinForm.value.username, this.signinForm.value.password);
  }

  async biometricCheck() {
    const isAvailable = await this.biometricService.isAvailable();
    if(!isAvailable){
      this.alertService.presentAlert('Thiết bị không hổ trợ vân tay/nhận diện khuôn mặt.');
      return;
    }

    const isUseBiometric = await this.biometricService.isUseBiometric();

    if (!isUseBiometric) {
      this.alertService.presentAlert('Quý thầy/cô vui long đăng nhập bằng mật khẩu sau đó vào phần Khác để tuỳ chọn cài đặt đăng nhập bằng vân tay/nhận diện khuôn mặt cho các lần đăng nhập sau.')
      return;
    }
    const isVerified = await this.biometricService.verify();

    if (!isVerified) {
      return;
    }

    if (isVerified) {
      const user = await this.biometricService.getUser();

      await this.processLogin(user.username, user.password);
    }
  }

  async processLogin(username, password) {
    this.isLoading = true;

    await this.animationCtrl.create()
      .addElement(this.logonIconRef.nativeElement)
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 1, transform: 'scale(2)' },
      ]).play();

    this.authService.signIn(username, password)
      .subscribe(
        {
          complete: async () => {
            this.isLoading = false;
          },
          error: async (err) => {
            this.isLoading = false;
          },
          next: async (res: BaseReponseModel<any>) => {
            console.log(res);
            if (res.success) {
              await this.biometricService.setUser(username, password)
              await this.authService.setToken(res.data.token);
              await this.router.navigate(['/home']);
            } else {
              this.message = res.message;
            }
          },
        });

  }
}

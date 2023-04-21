import { Injectable } from '@angular/core';
import { BiometryType, NativeBiometric } from "capacitor-native-biometric";
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  constructor(private toastService: ToastService) { }

  async performBiometricVerificatin(){
    const result = await NativeBiometric.isAvailable();
  
    if(!result.isAvailable) return;
  
    const isFaceID = result.biometryType == BiometryType.FACE_ID;
  
    const verified = await NativeBiometric.verifyIdentity({
      reason: "For easy log in",
      title: "Log in",
    })
      .then(() => true)
      .catch(() => false);
  
    if(!verified) return;
  
    // NativeBiometric.setCredentials({
    //   username: "hcm_thcs_viettel11b",
    //   password: "12345678aA@",
    //   server: "edoc.smas.edu.vn",
    // }).then();

    const credentials = await NativeBiometric.getCredentials({
      server: "edoc.smas.edu.vn",
    });

    console.log(credentials);
  }
}

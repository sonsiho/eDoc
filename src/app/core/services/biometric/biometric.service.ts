import { Injectable } from '@angular/core';
import { BiometryType, NativeBiometric } from "capacitor-native-biometric";
import { ToastService } from '../toast/toast.service';
import { DataService } from '../data/data.service';
import { StoreageKeyConstants } from '../../constants/storage-key.constants';

export const Server = 'edoc.smas.edu.vn';
@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  
  constructor(private toastService: ToastService,
    private dataService: DataService) { }

  async isUseBiometric() {
    return await this.dataService.get(StoreageKeyConstants.Biometric);
  }
  async getBiomtryType() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable)
      return BiometryType.NONE;

    return result.biometryType;
  }

  async verify() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable) return false;

    const verified = await NativeBiometric.verifyIdentity({
      reason: "For easy log in",
      title: "Log in",
      maxAttempts: 1,
    }).then(() => true)
      .catch(() => false);

    return verified;
  }

  async getUser() {
    return await NativeBiometric.getCredentials({
      server: Server
    });
  }

  async setUser(username,password) {
    return await NativeBiometric.setCredentials({
      server: Server,
      username: username,
      password: password
    });
  }

  async clear(){
    await NativeBiometric.deleteCredentials({
      server:Server
    });
  }

}

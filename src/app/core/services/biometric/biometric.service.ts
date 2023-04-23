import { Injectable } from '@angular/core';
import { AvailableResult, BiometryType, NativeBiometric } from "capacitor-native-biometric";
import { ToastService } from '../toast/toast.service';
import { DataService } from '../data/data.service';
import { StoreageKeyConstants } from '../../constants/storage-key.constants';

export const Server = 'edoc.smas.edu.vn';
@Injectable({
  providedIn: 'root'
})
export class BiometricService {

  biometricData: AvailableResult;
  constructor(private dataService: DataService) {
    this.init();
  }

  async init() {
    try {
      this.biometricData = await NativeBiometric?.isAvailable();
    } catch (error) {
      console.log(error);
    }
  }
  async isAvailable() {
    try {
      this.biometricData = await NativeBiometric?.isAvailable();

      return this.biometricData.isAvailable
    }
    catch (error) {
      return false;
    }
  }

  async isUseBiometric() {
    if (!this.biometricData?.isAvailable) {
      return false;
    }
    return await this.dataService.get(StoreageKeyConstants.Biometric);
  }
  async getBiomtryType() {
    const result = await NativeBiometric.isAvailable();

    if (!result.isAvailable)
      return BiometryType.NONE;

    return result.biometryType;
  }

  async verify() {
    if (!this.biometricData?.isAvailable) {
      return false;
    }

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
    if (!this.biometricData?.isAvailable) {
      return null;
    }

    return await NativeBiometric.getCredentials({
      server: Server
    });
  }

  async setUser(username, password) {
    if (!this.biometricData?.isAvailable) {
      return false;
    }

    return await NativeBiometric.setCredentials({
      server: Server,
      username: username,
      password: password
    });
  }

  async clear() {
    if (!this.biometricData?.isAvailable) {
      return false;
    }

    await NativeBiometric.deleteCredentials({
      server: Server
    });
  }

}

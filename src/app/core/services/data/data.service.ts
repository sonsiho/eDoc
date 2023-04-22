import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    if (!this._storage) {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      await this.storage.defineDriver(CordovaSQLiteDriver);
      const storage = await this.storage.create();
      this._storage = storage;
    }

  }

  public async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string) {
    return await this._storage?.get(key);
  }

  public async clear() {
    await this._storage?.clear();
  }

  public async remove(key){
    await this._storage?.remove(key);
  }
}

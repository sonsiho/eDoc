import { Component, OnInit } from '@angular/core';
import { StoreageKeyConstants } from 'src/app/core/constants/storage-key.constants';
import { BiometricService } from 'src/app/core/services/biometric/biometric.service';
import { DataService } from 'src/app/core/services/data/data.service';

@Component({
  selector: 'app-face-id',
  templateUrl: './face-id.page.html',
  styleUrls: ['./face-id.page.scss'],
})
export class FaceIdPage implements OnInit {

  constructor(private biometricService: BiometricService,
    private dataService: DataService) { }

  isOnBiometric: boolean;
  async ngOnInit() {
    this.isOnBiometric = await this.dataService.get(StoreageKeyConstants.Biometric);
  }

  async onChange(event : boolean){
    await this.dataService.set(StoreageKeyConstants.Biometric,event);

    this.isOnBiometric = await this.dataService.get(StoreageKeyConstants.Biometric);
  }
}

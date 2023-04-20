import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherPageRoutingModule } from './other-routing.module';

import { OtherPage } from './other.page';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherPageRoutingModule,
    MatListModule
  ],
  declarations: [OtherPage]
})
export class OtherPageModule {}

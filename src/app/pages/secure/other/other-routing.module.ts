import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherPage } from './other.page';

const routes: Routes = [
  {
    path: '',
    component: OtherPage
  },
  {
    path: 'face-id',
    loadChildren: () => import('./face-id/face-id.module').then( m => m.FaceIdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherPageRoutingModule {}

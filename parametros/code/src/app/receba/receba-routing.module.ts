import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecebaPage } from './receba.page';

const routes: Routes = [
  {
    path: '',
    component: RecebaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecebaPageRoutingModule {}

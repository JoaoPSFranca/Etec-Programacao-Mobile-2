import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecebaPageRoutingModule } from './receba-routing.module';

import { RecebaPage } from './receba.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecebaPageRoutingModule
  ],
  declarations: [RecebaPage]
})
export class RecebaPageModule {}

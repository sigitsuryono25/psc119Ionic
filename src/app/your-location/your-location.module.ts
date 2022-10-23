import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YourLocationPageRoutingModule } from './your-location-routing.module';

import { YourLocationPage } from './your-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourLocationPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [YourLocationPage]
})
export class YourLocationPageModule {}

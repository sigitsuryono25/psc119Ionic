import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourLocationPage } from './your-location.page';

const routes: Routes = [
  {
    path: '',
    component: YourLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourLocationPageRoutingModule {}

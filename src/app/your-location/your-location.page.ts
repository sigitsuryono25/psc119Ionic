import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { Helpers } from '../helper/Helpers';

@Component({
  selector: 'app-your-location',
  templateUrl: './your-location.page.html',
  styleUrls: ['./your-location.page.scss'],
})
export class YourLocationPage implements OnInit {

  loginForm: FormGroup;
  helpers: Helpers

  constructor(fb: FormBuilder, loadingController: LoadingController) {
    this.loginForm = fb.group({
      pelapor: ['', Validators.required],
      posisi: ['', Validators.required],
      foto: ['', Validators.required],
      jumlahKorban: ['', Validators.required],
      statusKorban: ['', Validators.required],
      kondisi: ['', Validators.required],
    });
    this.helpers = new Helpers(loadingController);
  }

  ngOnInit() {
    this.helpers.showLoading();
    this.loginForm.controls.posisi.setValue("7.1231, -110.36568");
    this.helpers.dismissLoading();
  }

  submitReport() {
    console.log(JSON.stringify(this.loginForm.value))
  }
}

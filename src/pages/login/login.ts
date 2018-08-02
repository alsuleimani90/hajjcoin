import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

// source https://github.com/yannbf/ionic3-components/tree/master/src/pages/login/login-background-slider
/**
 * 
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  backgrounds = [
    
    'assets/imgs/background/hajj_bg.jpg',
    'assets/imgs/background/background-1.jpg',
    'assets/imgs/background/background-2.jpg'
    
  ];
  public loginForm: any;

  constructor(public navCtrl:NavController, public formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),
        Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('Hello LoginBackgroundSlider Page');
  }

  openResetPassword() {
    console.log('Reset password clicked');
  }

  doLogin() {

    this.navCtrl.push(HomePage);
    // if (!this.loginForm.valid) {
    //   console.log('Invalid or empty data');
    // } else {
    //   const userEmail = this.loginForm.value.email;
    //   const userPassword = this.loginForm.value.password;

    //   console.log('user data', userEmail, userPassword);
    // }
  }
}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SellPage } from '../sell/sell';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public sellPage  = SellPage;
  constructor(public navCtrl: NavController) {

  }

}

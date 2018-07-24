import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../../pages/add/add';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  Username:string;
  password:string;

  constructor(public navCtrl: NavController) {

  }
  Sigin(Username,password){ if (Username !=undefined && password != undefined ) {
    
    
  }
    this.navCtrl.push(AddPage);
  }

}


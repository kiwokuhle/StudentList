import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import StudentArray from '../../app/StudentArray';
import { ObjectPage} from '../../app/Object';

/**
 * Generated class for the ModalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html',
})
export class ModalsPage {

arr =StudentArray;



  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  Delete(i,){
    this.arr.splice(i,1);
  }
  
  Update(i) {
    const prompt = this.alertCtrl.create({
      title: 'Add Students',
      message: "Enter Student Details",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Username',
          placeholder: 'Username'
        },
        {
          name: 'IdNumber',
          placeholder: 'IdNumber'
        },  {
          name: 'Gender',
          placeholder: 'Gender',
          
        },{
            name: 'Age',
            placeholder: 'Age',
            
          },
          
          {
            name: 'Course',
            placeholder: 'Course',
            
          }
          
  
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'add',
          handler: data => {
            console.log('Saved clicked');
            let obj = new ObjectPage(data.Name,data.Surname,data.IdNumber,data.Age,data.Gender,data.Course);

            this.arr.splice(i,1,obj);
            



          }
        }
      ]
    });
    prompt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalsPage');

    console.log(this.arr);
    
  }

}

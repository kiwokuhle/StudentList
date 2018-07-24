import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ModalController } from 'ionic-angular';
import { ObjectPage} from '../../app/Object';
import StudentArray from '../../app/StudentArray';
import { ModalsPage} from '../../pages/modals/modals';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add', 
  templateUrl: 'add.html',
})
export class AddPage {

  AddArray=StudentArray;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl : AlertController, public modalCtrl: ModalController) {
  }
  Add(Name,Surname,IdNumber,Age,Gender,Course){
   

  
    
  
    const prompt = this.alertCtrl.create({
      title: 'Add Students',
      message: "Enter Student Details",
      inputs: [
        {
          name: 'Name',
          placeholder: 'Name'
        },
        {
          name: 'Surname',
          placeholder: 'Surname'
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
            let obj= new ObjectPage (data.Name,data.Surname,data.IdNumber,data.Age,data.Gender,data.Course );
            this.AddArray.push(obj);
            console.log(obj)
            console.log(this.AddArray);
            



          }
        }
      ]
    });
    prompt.present();
  }

  View(){
    const modal = this.modalCtrl.create(ModalsPage);
    
    modal.present();

  }
  }



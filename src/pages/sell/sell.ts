import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestapiServiceProvider } from '../../providers/restapi-service';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-sell',
  templateUrl: 'sell.html',
})
export class SellPage {
qrData:string;
amount:number;
  constructor(public alertCtrl: AlertController,private rest:RestapiServiceProvider,private barcodeScanner: BarcodeScanner,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  verify()
  {
  // ionic api documention https://ionicframework.com/docs/native/barcode-scanner/
    this.barcodeScanner.scan().then(barcodeData => {
      
      // console.log('Barcode data', barcodeData.text);
      this.qrData= barcodeData.text;
      this.rest.verify("verifyTransaction",this.qrData,this.amount).then(mdata => {
        // console.log("data"+data.results);
        var data = mdata.data;
        // console.log("here"+JSON.stringify(data));
        console.log("here"+data);
        if(data.status == false)
        {
          alert(data.message);
        }
        else if(data.status == true)
        {
          this.showPrompt(data.message);
        }
        else
        {
          alert("Error Occured");

        }
        
        
          // console.log("data"+this.getUsers3(element.ID));
          
          
        // this.HideLoading();
      }).catch( (ex:any)=>{
        // this.HideLoading();
        alert("Error .. Please try again");
      });
    
      
     }).catch(err => {
         console.log('Error', err);
     });  
  }
  pay()
  {
    this.rest.pay("PerformTransaction",this.qrData,this.amount).then(mdata => {
      // console.log("data"+data.results);
      var data = JSON.parse(mdata.data);
      // console.log("here"+JSON.stringify(data));
      console.log("here"+data);
      if(data.status == false)
      {
        alert(data.message);
      }
      else if(data.status == true)
      {
        //this.showPrompt(data.message);
        alert(data.message);
      }
      else
      {
        alert("Error Occured");

      }
      
      
        // console.log("data"+this.getUsers3(element.ID));
        
        
      // this.HideLoading();
    }).catch( (ex:any)=>{
      // this.HideLoading();
      alert("Error .. Please try again");
    });
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SellPage');
  }

  showPrompt(msg:string) {
    const prompt = this.alertCtrl.create({
      title: "Confirmation",
      message: msg,
      inputs: [
        {
          name: 'title',
          placeholder: 'Please Enter OTP'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
            alert("transuction cancelled");
          }
        },
        {
          text: 'Pay',
          handler: data => {
            if(!this.amount)
            {
              alert("Amount cannot be empty");
              return;
            }
            this.rest.verify("performTransaction",this.qrData,this.amount).then(mdata => {
        // console.log("data"+data.results);
        var data = mdata.data;
        // console.log("here"+JSON.stringify(data));
        console.log("here"+data);
        if(data.status == false)
        {
          alert(data.message);
        }
        else if(data.status == true)
        {
          this.showPrompt(data.message);
        }
        else
        {
          alert("Error Occured");

        }
        
        
          // console.log("data"+this.getUsers3(element.ID));
          
          
        // this.HideLoading();
      }).catch( (ex:any)=>{
        // this.HideLoading();
        alert("Error .. Please try again");
      });
    
            
          }
        }
      ]
    });
    prompt.present();
  }


}

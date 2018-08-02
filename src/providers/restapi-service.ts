import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http';
@Injectable()
export class RestapiServiceProvider {
  apiUrl = "http://10.0.12.214:52288/api/hajjcoin/";
  constructor(public nativeHttp:HTTP) {
  }

  get(url:string) {
      this.nativeHttp.setDataSerializer('json');
      return this.nativeHttp.get(this.apiUrl+url,{},{'Accept': 'application/json;odata=verbose'});
  }
  verify(url:string,qr:string,total:number) {
    //this.nativeHttp.setDataSerializer('json');
     
    return this.nativeHttp.post(this.apiUrl+url+"/"+qr+"/"+total,{},{});
  }
  pay(url:string,qr:string,total:number) {
    //this.nativeHttp.setDataSerializer('json');
    var supID:number = 1234;
    return this.nativeHttp.post(this.apiUrl+url+"/"+qr+"/"+total+"/"+supID,{},{});
  }
}

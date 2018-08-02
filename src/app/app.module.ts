import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SellPage } from '../pages/sell/sell';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { LoginPage } from '../pages/login/login';
import { RestapiServiceProvider } from '../providers/restapi-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    SellPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    HomePage,
    SellPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    RestapiServiceProvider,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

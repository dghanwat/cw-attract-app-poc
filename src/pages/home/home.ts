import { Component, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PowerManagement } from '@ionic-native/power-management';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
// import * as $ from "jquery";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {

  wakelock: string = '';
  fullscreen: string = '';

  mobHeight: any;
  mobWidth: any;

  constructor(public navCtrl: NavController,
    powerManagement: PowerManagement,
    androidFullScreen: AndroidFullScreen) {
    powerManagement.acquire()
      .then(() => {
        this.wakelock = "available";
      })
      .catch(reason => {
        console.error("no-wakelock", reason);
        this.wakelock = `not available, reason=${reason}`;
      })
      ;
    androidFullScreen.immersiveMode()
      .then(() => {
        this.fullscreen = "available";
      })
      .catch(reason => {
        console.error("no-fullscreen", reason);
        this.fullscreen = `not available, reason=${reason}`;
      })

      this.mobHeight = (window.screen.height) + "px";
      this.mobWidth = (window.screen.width) + "px";
        console.log(this.mobHeight);
        console.log(this.mobWidth) 
  }

  public ngAfterViewInit() {
   
  }

  ngOnDestroy() {
   
  }



}

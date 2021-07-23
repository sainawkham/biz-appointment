import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/authentication-service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    
    this.authService.ngFireAuth.onAuthStateChanged(user => {
      if (user) {
        console.log('user is logged in, info: ', user);
      } else {
        this.router.navigate(['login']);
      }
    });
  }

  async presentAlertLogout() {
    const alert = await this.alertController.create({
      //cssClass: 'my-custom-class',
      header: 'Logout',
      message: '<strong>Are you sure to logout </strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.authService.SignOut();
          }
        }
      ]
    });

    await alert.present();
  }
}

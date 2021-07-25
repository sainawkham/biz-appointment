import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/authentication-service';
import { GeneralService } from '../Shared/general-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  constructor(
    public authService: AuthenticationService,
    public genService: GeneralService,
    public router: Router,
    public ngZone: NgZone,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    
    this.authService.ngFireAuth.onAuthStateChanged(user => {
      if (user) {
        //console.log('user is logged in, info: ', user);
      } else {
        this.ngZone.run(() => {
          this.router.navigate(['login']);
        })
      }
    });
  }
 
}

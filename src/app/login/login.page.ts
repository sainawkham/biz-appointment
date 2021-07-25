import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/authentication-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public ngZone: NgZone,
    public router: Router
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

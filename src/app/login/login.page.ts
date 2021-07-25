import { Component, OnInit } from '@angular/core';
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
    public router: Router
  ) {}

  ngOnInit() {
    this.authService.ngFireAuth.onAuthStateChanged(user => {
      if (user) {
        //console.log('user is logged in, info: ', user);
      } else {
        this.router.navigate(['login']);
      }
    });
  }
}

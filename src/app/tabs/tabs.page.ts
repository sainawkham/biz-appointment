import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../Shared/authentication-service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public authService: AuthenticationService, 
              public router: Router) {}

  ngOnInit() {
    if (!this.authService.isLoggedIn)
      this.router.navigate(['login']);
  }

}

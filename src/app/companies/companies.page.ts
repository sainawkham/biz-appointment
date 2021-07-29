import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Shared/authentication-service';
import { CompaniesService } from '../services/companies.service';

export class Companies {
  $key: string;
  companyName: string;
  Address: string;
}

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss']
})

export class CompaniesPage implements OnInit {

  comList : Companies[];
  
  constructor(private comService: CompaniesService,
              public authService: AuthenticationService,
              public ngZone: NgZone,
              public router: Router) {}

  ngOnInit() {
    //check login or not. if not login goto login page.
    this.authService.ngFireAuth.onAuthStateChanged(user => {
      if (user) {
        //console.log('user is logged in, info: ', user);
      } else {
        this.ngZone.run(() => {
          this.router.navigate(['login']);
        })
      }
    });
    // read from firestore
   this.comService.getCompanies().subscribe((res)=> {
     this.comList = res.map((t) => {
       return {
         id: t.payload.doc.id,
         ...t.payload.doc.data() as Companies
       };
     })
   });
  }

  getcomList() {
    this.comService.getCompanies()
    .subscribe((data) => {
      console.log(data)
    })
  }

}

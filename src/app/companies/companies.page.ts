import { Component, OnInit } from '@angular/core';

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
  
  constructor(private comService: CompaniesService) {}

  ngOnInit() {
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

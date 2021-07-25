import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.page.html',
  styleUrls: ['./companies.page.scss']
})
export class CompaniesPage implements OnInit {
  constructor(public db: AngularFirestore) {}

  ngOnInit() {
   
  }
}

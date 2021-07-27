import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from "@angular/router";

export class Companies {
  $key: string;
  companyName: string;
  Address: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private ngFirestore: AngularFirestore,
              private router: Router) { }

  getCompanies() {
    return this.ngFirestore.collection('companies').snapshotChanges();
  }
}

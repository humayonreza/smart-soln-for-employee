import { Component, OnInit } from '@angular/core';

export interface arrNavbar {
  Ser: string;
  LinkName: string;
  Link: string;
  Cl: string;  
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  onSelect(Ser: string){
    // console.log(Ser);
    for(let i = 0; i< this.arrNavbar.length; i++){
      if (this.arrNavbar[i].Ser == Ser){
        this.arrNavbar[i].Cl = "active";
      } else {
        this.arrNavbar[i].Cl = "inactive";
      }
    }
  }
  ngOnInit(): void {
  }

  arrNavbar: arrNavbar[] = [
    { Ser: "1", LinkName: "HOME", Link: "/", Cl: "inactive"},
    { Ser: "2", LinkName: "REGISTER", Link: "/register", Cl: "inactive"},
    { Ser: "3", LinkName: "CREATE ORG", Link: "/create-org", Cl: "inactive"},
  ];
}

// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ManArrService } from './../../services/manArr.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private manArrService: ManArrService,
    public authService: AuthService
  ) {}
  // @Input() paramId: string = '';
  arrNav: any[] = [];

  signout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.arrNav = this.manArrService.return_arr_list(5);
    console.log('arr nav @navsmart', this.arrNav);
  }
}

import { Component, OnInit } from '@angular/core';
import { ManArrService } from 'src/app/services/manArr.service';
import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navbarsmart',
  templateUrl: './navbarsmart.component.html',
  styleUrls: ['./navbarsmart.component.css'],
})
export class NavbarsmartComponent implements OnInit {
  constructor(
    private manArrService: ManArrService,
    // private router: Router,
    public authService: AuthService
  ) {}
  // @Input() paramId: string = '';
  arrNav: any[] = [];
  // get_details(OptVal: string) {
  //   let data = this.authService.LoggedUserData();
  //   let encodedString = btoa(data.empId);
  //   // this.roleId = data.empRoleId;
  //   // this.empId = data.empId;
  //   console.log('Optval : ', OptVal);
  //   let url =
  //     OptVal == '2'
  //       ? this.router.navigate(['roster', encodedString])
  //       : OptVal == '3'
  //       ? this.router.navigate(['compliances', encodedString])
  //       : OptVal == '4'
  //       ? this.router.navigate(['time-sheet', encodedString])
  //       : this.router.navigate(['home']);
  // }
  signout(): void {
    this.authService.logout();
  }
  ngOnInit(): void {
    this.arrNav = this.manArrService.return_arr_list(5);
    console.log('arr nav @navsmart', this.arrNav);
  }
}

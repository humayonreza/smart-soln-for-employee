import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
})
export class RosterComponent implements OnInit {
  loginName: string = '';
  imgPath: string = '';
  constructor(
    public backendService: BackendService,
    private authService: AuthService // private route: ActivatedRoute
  ) {}
  //
  logout() {
    this.authService.logout();
  }
  //
  init_setup() {
    let data = this.authService.LoggedUserData();
    let roleId = data.empRoleId;
    let empId = data.empId;
    this.loginName = data.firstName;
    this.imgPath = this.backendService.imgPath;
    this.backendService.set_view_by_role(roleId);
    console.log('Emp Data@ roster :', roleId + ' | ' + empId);
  }
  //
  ngOnInit(): void {
    this.init_setup();
  }
}

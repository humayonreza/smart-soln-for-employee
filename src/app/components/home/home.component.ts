import { Component, OnInit } from '@angular/core';
import { ManArrService } from 'src/app/services/manArr.service';
import { AuthService } from './../../services/auth.service';
import { BackendService } from './../../services/backend.service';
// import { MatDialog } from '@angular/material/dialog';
// import { ModalComponent } from './../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  paramId: string = '';
  roleId: number = 0;
  empId: number = 0;
  loginName: string = '';
  // isAdminStaff: boolean = false;
  // isEmp: boolean = false;
  // isContractor: boolean = false;
  constructor(
    private authService: AuthService,
    public backendService: BackendService,
    public manArrService: ManArrService // public dialog: MatDialog
  ) {}
  arrListEmp: any[] = [];
  arrIndlEmpData: any[] = [];
  //
  logout() {
    this.authService.logout();
  }
  //
  fetch_data(queryId: string, empId: number) {
    let data = {
      empId,
      queryId,
    };
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      if (resp) {
        queryId == '2'
          ? (this.manArrService.arrList4Approval = resp)
          : queryId == '3'
          ? (this.arrListEmp = resp)
          : queryId == '5'
          ? (this.arrIndlEmpData = resp)
          : null;
        console.log('Data : ', this.arrIndlEmpData);
      } else {
        console.log('No data...');
      }
    });
  }

  init_setup() {
    let data = this.authService.LoggedUserData();
    let roleId = data.empRoleId;
    let empId = data.empId;
    this.loginName = data.firstName;
    console.log('empId@home : ', empId + ' - ' + roleId);
    this.paramId = data.empId;
    this.backendService.set_view_by_role(roleId);
    if (roleId == 1) {
      this.fetch_data('2', 0);
      this.fetch_data('3', 0);
    } else if (roleId == 2) {
      this.fetch_data('5', empId);
    }
  }
  isSmart: boolean = false;
  imgPath: string = '';
  ngOnInit(): void {
    this.init_setup();
    // this.isSmart = screen.width > 550 ? false : true;
    this.imgPath = this.backendService.imgPath;
  }
}

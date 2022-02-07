import { Component, OnInit } from '@angular/core';
import { ManArrService } from './../../services/manArr.service';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // ser,empId,empTypeId,empRoleId,firstName,lastName,empEmail,genderCode,dob,workRightCode,isActive
  empId: number = 0;
  empTypeId: number = 0;
  empRoleId: number = 0;
  firstName: string = '';
  lastName: string = '';
  empEmail: string = '';
  genderCode: number = 0;
  dob: string = '';
  workRightCode: number = 0;
  isActive: number = 0;
  queryId_01 = '1';
  constructor(
    private backendService: BackendService,
    public manArrService: ManArrService
  ) {}
  submit_emp_reg(data: any) {
    // console.log(data);
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      console.log('Response : ', resp);
    });
  }
  arrEmpType: any[] = [];
  arrRoleType: any[] = [];
  arrGenderType: any[] = [];
  arrWorkRightType: any[] = [];
  initVar() {
    this.arrEmpType = this.manArrService.arrOption.filter((m) => m.ArrId == 1);
    this.arrRoleType = this.manArrService.arrOption.filter((m) => m.ArrId == 2);
    this.arrGenderType = this.manArrService.arrOption.filter(
      (m) => m.ArrId == 3
    );
    this.arrWorkRightType = this.manArrService.arrOption.filter(
      (m) => m.ArrId == 4
    );
  }
  ngOnInit(): void {
    this.initVar();
  }
}

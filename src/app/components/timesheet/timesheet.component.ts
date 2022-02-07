import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],
})
export class TimesheetComponent implements OnInit {
  constructor(
    public backendService: BackendService,
    private authService: AuthService // private route: ActivatedRoute
  ) {}
  //
  arrSummaryByHours: any[] = [];
  loginName: string = '';
  imgPath: string = '';
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
    console.log('Data Job: ', data);
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      if (resp) {
        console.log('data... : ', resp);
        this.process_data(resp, queryId);
      } else {
        console.log('No data...');
      }
    });
  }
  //
  // dayHrs: '3.0833';
  // empId: '1002';
  // niHrs: '22.0000';
  // totalHrs: '25.0833';

  tNiHrs: number = 0;
  tDayHrs: number = 0;
  gTotal: number = 0;
  //
  process_data(arr: any, queryId: string) {
    this.arrSummaryByHours = [];
    if (queryId == '9') {
      for (let i = 0; i < arr.length; i++) {
        let data = {
          ser: arr[i].ser,
          empId: arr[i].empId,
          niHrs: parseFloat(arr[i].niHrs).toFixed(2),
          dayHrs: parseFloat(arr[i].dayHrs).toFixed(2),
          totalHrs: parseFloat(arr[i].totalHrs).toFixed(2),
        };
        this.arrSummaryByHours.push(data);
        this.tDayHrs = this.tDayHrs + parseFloat(arr[i].dayHrs);
        this.tNiHrs = this.tNiHrs + parseFloat(arr[i].niHrs);
        this.gTotal = this.gTotal + parseFloat(arr[i].totalHrs);
        console.log('Summary: ', this.arrSummaryByHours);
      }
    } else {
      this.arrDuty = [];
      console.log('Doc List @compliances : ', arr);
      for (let i = 0; i < arr.length; i++) {
        let data = {
          ser: arr[i].ser,
          empId: arr[i].empId,
          jobDate: arr[i].jobDate,
          clockin: arr[i].clockin,
          clockout: arr[i].clockout,
          totalHrs: parseFloat(arr[i].totalHrs),
          niHrs: parseFloat(arr[i].nightHrs),
        };
        this.arrDuty.push(data);
        this.tDayHrs = this.tDayHrs + (data.totalHrs - data.niHrs);
        this.tNiHrs = this.tNiHrs + data.niHrs;
        this.gTotal = this.gTotal + data.totalHrs;
        console.log('Duty Details: ', this.arrDuty);
      }
    }
  }
  arrDuty: any[] = [];
  //
  roleId: number = 0;
  empId: number = 0;
  init_setup() {
    let data = this.authService.LoggedUserData();
    let roleId = data.empRoleId;
    let empId = data.empId;
    this.loginName = data.firstName;
    this.backendService.set_view_by_role(roleId);
    console.log('Emp Data @ time-sheet :', roleId + ' | ' + empId);
    roleId == 1
      ? this.fetch_data('9', 0)
      : roleId == 2
      ? this.fetch_data('10', empId)
      : null;
  }
  //
  ngOnInit(): void {
    this.init_setup();
    this.imgPath = this.backendService.imgPath;
  }
}

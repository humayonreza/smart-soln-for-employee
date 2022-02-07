import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManArrService } from 'src/app/services/manArr.service';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-manageact',
  templateUrl: './manageact.component.html',
  styleUrls: ['./manageact.component.css'],
})
export class ManageactComponent implements OnInit {
  arrData2Approve: any[] = [];
  imgPath: string = '';
  loginName: string = '';
  orgId: number = 0;
  constructor(
    private route: ActivatedRoute,
    public manArrService: ManArrService,
    public backendService: BackendService,
    private authService: AuthService,
    private router: Router
  ) {}
  logout() {
    this.authService.logout();
  }
  approve_emp_appl(ser: number, email: string) {
    let data = {
      ser,
      email,
      queryId: '4',
    };
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      if (resp) {
        console.log('Data : ', resp);
        let folderName = resp.empId;
        this.create_image_folder(folderName);
      } else {
        console.log('No data...');
      }
    });
  }
  //
  create_image_folder(folder_name: string) {
    let orgId = this.orgId;
    let data = {
      orgFolderId: orgId,
      folderName: folder_name,
    };
    console.log('Folder Name : ', folder_name);
    this.backendService.CreateFolder(data).subscribe((resp: any) => {
      if (resp) {
        console.log('Data : ', resp);
        this.router.navigate(['home']);
      } else {
        console.log('No data...');
      }
    });
  }
  //
  ngOnInit(): void {
    let str = this.authService.LoggedUserData();
    this.orgId = str.orgId;
    this.loginName = str.firstName;
    this.route.params.subscribe((params) => {
      this.arrData2Approve = this.manArrService.arrList4Approval.filter(
        (m) => m.ser == params.id1
      );
      console.log('arr @url', params.id2);
    });
    this.imgPath = this.backendService.imgPath;
  }
}

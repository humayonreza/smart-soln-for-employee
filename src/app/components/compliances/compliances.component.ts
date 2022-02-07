import { Component, OnInit } from '@angular/core';
import { BackendService } from './../../services/backend.service';
import { AuthService } from './../../services/auth.service';
import { ThemePalette } from '@angular/material/core';
import { ManArrService } from 'src/app/services/manArr.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';
declare var require: any;
const FileSaver = require('file-saver');
@Component({
  selector: 'app-compliances',
  templateUrl: './compliances.component.html',
  styleUrls: ['./compliances.component.css'],
})
export class CompliancesComponent implements OnInit {
  constructor(
    public backendService: BackendService,
    private authService: AuthService, // private route: ActivatedRoute
    public manArrService: ManArrService,
    public dialog: MatDialog
  ) {}
  //
  roleId: number = 0;
  color: ThemePalette = 'accent';
  arrDocsAllEmp: any[] = [];
  arrDocsIndlEmp: any[] = [];
  arrDocType: any[] = [];
  arrDocName: any[] = [];
  arrStateTerr: any[] = [];
  isUpload: boolean = false;
  ser: number = 0;
  empId: number = 0;
  typeId: number = 0;
  docId: number = 0;
  imgId: string = '';
  state_terrId: number = 0;
  expDate: string = '';
  orgId: number = 1001;
  queryIdUpload: string = '8';
  docMgtType: string = 'Upload / Renew Documents';
  imgPath: string = '';
  isDownload: boolean = false;
  downloadLink: string = '';
  empFullName: string = '';
  loginName: string = '';
  //
  logout() {
    this.authService.logout();
  }
  fetch_data(queryId: string, empId: number) {
    let data = {
      empId,
      queryId,
    };
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      if (resp) {
        queryId == '6'
          ? (this.arrDocsAllEmp = resp)
          : queryId == '7'
          ? (this.process_data(resp), (this.backendService.isEmp = true))
          : null;
      } else {
        console.log('No data...');
      }
    });
  }
  //
  process_data(arr: any) {
    this.arrDocsIndlEmp = [];
    console.log('Doc List @compliances : ', arr);
    for (let i = 0; i < arr.length; i++) {
      let data = {
        ser: arr[i].ser,
        empId: arr[i].empId,
        typeId: arr[i].typeId,
        docId: arr[i].docId,
        docName:
          this.manArrService.arrOption[
            this.manArrService.arrOption.findIndex(
              (p) =>
                p.ArrId == 7 &&
                p.ParentId == arr[i].typeId &&
                p.OptVal == arr[i].docId
            )
          ].OptTxt,
        imgId: arr[i].imgId,
        state_terrId: arr[i].state_terrId,
        expDate: arr[i].expDate,
        daysLeft: arr[i].daysLeft,
        docExtId: arr[i].docExtId,
        orgId: arr[i].orgId,
        isSelected: 0,
        docExtIcon:
          arr[i].docExtId == 1
            ? 'photo'
            : arr[i].docExtId == 2
            ? 'photo'
            : arr[i].docExtId == 3
            ? 'picture_as_pdf'
            : 'font_download',
      };
      this.arrDocsIndlEmp.push(data);
    }
  }

  //
  // get_val_by_param(typeId: number, docId: number) {
  //   // let index = this.manArrService.arrOption.findIndex(
  //   //   (p) => p.ArrId == 7 && p.ParentId == typeId && p.OptVal == docId
  //   // );
  //   return;
  // }
  //

  //

  manage_upload(data: any, isNewUpload: boolean) {
    this.isUpload = true;
    if (!isNewUpload) {
      this.docMgtType = 'Upload Renewd Documents';
      this.ser = data.ser;
      this.empId = data.empId;
      this.typeId = data.typeId;
      this.arrDocName = this.manArrService.arrOption.filter(
        (m) => m.ArrId == 7 && m.ParentId == data.typeId
      );
      this.docId = data.docId;
      this.backendService.docExtId = data.docExtId;
      this.imgId = data.imgId;
      this.state_terrId = data.state_terrId;
      this.expDate = data.expDate;
      this.orgId = data.orgId;
      if (data.docExtId == 4) {
        this.isDownload = false;
        this.downloadLink =
          this.backendService.imgPath + data.empId + '/' + this.imgId + '.doc';
      } else {
        this.isDownload = true;
      }
      this.make_active_row(data.ser);
    } else if (isNewUpload) {
      this.docMgtType = 'Upload New Documents';
      this.ser = 0;
      this.empId = this.roleId == 2 ? this.empId : 0;
      this.typeId = 0;
      this.docId = 0;
      this.imgId = 'NA';
      this.state_terrId = 0;
      this.expDate = '';
      this.orgId = this.orgId;
    }
  }
  //
  make_active_row(ser: number) {
    for (let i = 0; i < this.arrDocsIndlEmp.length; i++) {
      if (this.arrDocsIndlEmp[i].ser == ser) {
        this.arrDocsIndlEmp[i].isSelected = 1;
      } else {
        this.arrDocsIndlEmp[i].isSelected = 0;
      }
    }
  }
  //
  submit_doc_upload_data(data: any) {
    console.log('submit_doc_upload_data :', data);
    this.backendService.SubmitQuery(data).subscribe((resp: any) => {
      if (resp) {
        console.log('crud resp @compliances : ', resp);
        let imageId = this.orgId + '-' + this.empId + '-' + resp.imgId;
        console.log('Img Payload :', imageId);
        this.backendService.upload_image(imageId);
        this.fetch_data('7', this.empId);
      } else {
        console.log('No data...');
      }
    });
  }
  //
  set_arr_doc_name(e: number) {
    console.log(e);
    this.arrDocName = this.manArrService.arrOption.filter(
      (m) => m.ArrId == 7 && m.ParentId == e
    );
  }
  //
  view_file(empId: number, imgId: string, docExtId: number) {
    console.log('Image Id @open_modal/compliance :', imgId);
    if (docExtId == 3) {
      let fileUrl =
        this.backendService.imgPath +
        this.orgId +
        '/' +
        empId +
        '/' +
        imgId +
        '.pdf';
      this.view_doc(fileUrl, imgId);
    } else {
      let viewId = 1;
      let data =
        viewId + '-' + this.orgId + '-' + empId + '-' + imgId + '-' + docExtId;

      const dialogRef = this.dialog.open(ModalComponent, {
        width: screen.width > 500 ? '50%' : '100%',
        height: 'auto',
        data: data,
      });
    }
  }
  //
  view_doc(fileUrl: string, fileName: string) {
    console.log(fileUrl);
    // const fileUrl = this.backendService.imgPath;
    // const fileName = '133';
    FileSaver.saveAs(fileUrl, fileName);
  }
  //
  init_setup() {
    this.arrDocType = [];
    this.arrDocType = this.manArrService.arrOption.filter((m) => m.ArrId == 6);
    console.log('arrDocType :', this.arrDocType);
    this.arrStateTerr = [];
    this.arrStateTerr = this.manArrService.arrOption.filter(
      (m) => m.ArrId == 8
    );
    let data = this.authService.LoggedUserData();
    this.roleId = data.empRoleId;
    this.empId = data.empId;
    this.loginName = data.firstName;
    this.empFullName =
      data.empRoleId == 1 ? 'Admin' : data.firstName + ' ' + data.lastName;
    this.backendService.set_view_by_role(data.empRoleId);
    console.log('Emp Data@ compliances :', this.roleId + ' | ' + this.empId);
    this.roleId == 1
      ? this.fetch_data('6', 0)
      : this.roleId == 2
      ? this.fetch_data('7', this.empId)
      : null;
  }
  //
  ngOnInit(): void {
    this.init_setup();
    this.imgPath = this.backendService.imgPath;
  }
}

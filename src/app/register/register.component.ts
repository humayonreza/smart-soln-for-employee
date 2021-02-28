import { BackendService } from './../services/backend.service';
import { LookupService } from './../services/lookup.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { BackendService } from '../services/backend.service';

export interface arrUserType {
  Ser: string;
  Value: string;
  Caption: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  arrOrgInfo = [];
  Ser: number = 0;
  UserType: number = 0;
  UserName: string = '';
  OrgName: string = '';
  OrgEmail: string = '';
  domain: string = '';
  slug: string = '';
  OrgLink: string = '';
  arrData: any[] = [];

  constructor(
    private http: HttpClient,
    private backendService: BackendService,
    private lookupService: LookupService
  ) {}

  // Ser,UserType,UserId,Password,UserName,OrgName,OrgEmail,CreateDate,SecStr,OrgId
  register_org(formData: any) {
    console.log(formData);
    let data = {
      Ser: formData.Ser,
      UserType: formData.UserType,
      UserName: formData.UserName,
      OrgName: formData.OrgName,
      OrgEmail: formData.OrgEmail,
      OrgLink: formData.domain + formData.slug,
      queryId: '15',
    };
    this.backendService.submit_query(data).subscribe((resp: any[]) => {
      this.arrData = resp;
      console.log('Component Response :', this.arrData);
    });
  }
  oninputChange(val: string) {
    console.log(val);
    this.slug = val.replace(/\s+/g, '-').toLowerCase();
  }
  onOptionsSelected(val: string) {
    console.log(val);
    // let str = this.OrgName;
    // this.slug = str.replace(/\s+/g, '-').toLowerCase();
    this.domain = val == '1' ? 'https://app-dev.online/' : '';

    // console.log('Slug : ', str);
  }
  fetch_lookup(OrgId: number) {
    let data = {
      OrgId: OrgId,
      queryId: '14',
    };
    this.lookupService.BackendService(data).subscribe((resp: any[]) => {
      this.arrData = resp;
      console.log('Component Response :', this.arrData);
    });
  }
  ngOnInit(): void {
    this.fetch_lookup(1001);
  }
  arrUserType: arrUserType[] = [
    { Ser: '1', Value: '1', Caption: 'Trial' },
    { Ser: '2', Value: '2', Caption: 'Paid' },
    { Ser: '3', Value: '3', Caption: 'Suspended' },
    { Ser: '4', Value: '4', Caption: 'Test' },
  ];
}

// this.jobservice.getJobs().subscribe(
//   (data) => (this.jobs = data),
//   (error) => {
//     console.log('error');
//   }
// );

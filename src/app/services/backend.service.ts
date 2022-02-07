import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from './interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  // imgPath = 'assets/images/';
  // basePath: string = 'https://smartsoln.org/backendSSP/scripts/';

  // basePath: string = 'http://localhost:8080/backendSSP/scripts/';
  // imgPath: string = 'http://localhost:8080/backendSSP/images/';
  basePath: string = 'http://smartsoln.org/backendSSP/scripts/';
  imgPath: string = 'http://smartsoln.org/backendSSP/images';
  // basePath: string = 'http://52.63.82.10/backendSSP/scripts/';
  // imgPath: string = 'http://52.63.82.10/backendSSP/images/';

  weather_api: string =
    'https://api.weatherapi.com/v1/current.json?key=2ef853bb23d244d7ae0130845210707&q=';
  constructor(private http: HttpClient, private router: Router) {}
  isAdminStaff: boolean = false;
  isEmp: boolean = false;
  isContractor: boolean = false;
  elm: any;
  fileExt: string = '';
  docExtId: number = 0;
  //
  fetchDeplData(param: any): Observable<Resp[]> {
    console.log(param);
    return this.http.post<Resp[]>(
      this.basePath + 'backend_service.php',
      param,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      }
    );
  }
  //
  fetch_weather_info(CenKPI: string) {
    let api = this.weather_api + CenKPI;
    return this.http.get<Resp[]>(api);
  }
  //
  SubmitQuery(data: any): Observable<Resp[]> {
    console.log(data);
    return this.http.post<Resp[]>(this.basePath + 'backend_service.php', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  //
  CreateFolder(data: any): Observable<Resp[]> {
    console.log(data);
    return this.http.post<Resp[]>(this.imgPath + 'create_folder.php', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  //
  getImagePath() {
    return this.imgPath;
  }
  //
  manage_action(ser: number, actionId: number) {
    this.router.navigate(['manage', ser, actionId]);
  }
  //
  set_view_by_role(roleId: number) {
    roleId == 1
      ? ((this.isAdminStaff = true),
        (this.isEmp = false),
        (this.isContractor = false))
      : roleId == 2
      ? ((this.isAdminStaff = false),
        (this.isEmp = true),
        (this.isContractor = false))
      : roleId == 3
      ? ((this.isAdminStaff = false),
        (this.isEmp = false),
        (this.isContractor = true))
      : null;
  }
  //
  fileName: string = 'No File Selected';
  onFileSelected(event: any) {
    this.elm = event.target;
    this.fileName = this.elm.files[0].name;
    if (this.elm.files.length > 0) {
      if (this.elm.files[0].type === 'image/jpeg') {
        this.fileExt = '.jpg';
        this.docExtId = 1;
      } else if (this.elm.files[0].type === 'image/png') {
        this.fileExt = '.png';
        this.docExtId = 2;
      } else if (this.elm.files[0].type === 'application/pdf') {
        this.fileExt = '.pdf';
        this.docExtId = 3;
      } else {
        this.fileExt = '.docx';
        this.docExtId = 4;
      }
    }
    console.log('File Type :', this.docExtId);
  }
  //
  upload_image(ImgId: string) {
    let imgData = new FormData();
    let imgContent = this.docExtId + '-' + ImgId + this.fileExt;
    imgData.append('file', this.elm.files[0], imgContent);
    console.log('File Name @bes: ', imgContent);
    this.http
      .post(this.imgPath + 'image_upload_script.php', imgData)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}

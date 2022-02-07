import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { BackendService } from './../../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  UserId: string = '';
  Password: string = '';
  queryId_02: string = '2';
  invalidLogin: boolean = false;
  imgPath: string = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private backendService: BackendService
  ) {}
  // empId: '1001';
  // empRoleId: '3';
  // firstName: 'Jaman';
  // secretStr: 'abcd1234';
  // ser: '1';
  login(cred: any) {
    this.authService.authUser(cred).subscribe((resp: any) => {
      if (resp) {
        let mySplitResult = resp.split('.');
        let loginData = mySplitResult[1];
        let decodedString = atob(loginData);
        let str = JSON.parse(decodedString);
        localStorage.setItem('token', loginData);
        console.log('Response :', str);
        if (str) {
          this.router.navigate(['/home']);
        }
      } else {
        this.invalidLogin = true;
      }
    });
  }

  ngOnInit(): void {
    this.imgPath = this.backendService.getImagePath();
  }
}

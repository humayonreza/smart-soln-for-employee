import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resp } from './interfaces';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // basePath: string = 'http://localhost:8080/backendSSP/scripts/';
  basePath: string = 'https://smartsoln.org/backendSSP/scripts/';
  // basePath: string = 'http://52.63.82.10/backendSSP/scripts/';
  // basePath = 'assets/backendSSP/scripts/';
  constructor(private http: HttpClient, private router: Router) {}

  authUser(cred: any): Observable<Resp[]> {
    console.log(cred);
    return this.http.post<Resp[]>(this.basePath + 'auth.php', cred, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
  LoggedUserData() {
    let token = localStorage.getItem('token');
    if (!token) {
      console.log('error ...');
    } else {
      let decodedString = atob(token);
      let str = JSON.parse(decodedString);
      return str;
      // console.log('Token @navbar : ', str);
    }
  }

  logout() {
    console.log('logout success...');
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
}

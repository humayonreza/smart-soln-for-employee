import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/backendRESTAURANT/scripts/';

  constructor(private http: HttpClient) {}

  submit_query(data: any) {
    return this.http
      .post(this.baseUrl + 'backend_service.php', JSON.stringify(data))
      .map((response: any) => {
        if (response && response != '401') {
          return response;
        } else return false;
      });
  }

  fetch_test_data(url: string) {
    return this.http.get(url).map((response: any) => {
      if (response && response != '401') {
        return response;
      } else return false;
    });
  }
}

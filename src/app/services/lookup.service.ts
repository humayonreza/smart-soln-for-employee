import { BackendService } from './backend.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class LookupService {
  baseUrl: string = 'http://localhost:8080/backendRESTAURANT/scripts/';
  constructor(private http: HttpClient) {}

  BackendService(data: any) {
    return this.http
      .post(this.baseUrl + 'backend_service.php', JSON.stringify(data))

      .map((resp: any) => {
        console.log(resp);
        return resp;
      });
  }
}

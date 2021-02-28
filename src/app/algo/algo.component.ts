import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css'],
})
export class AlgoComponent implements OnInit {
  arrData: string[] = [];
  arrDrawn: any[] = [];
  count: number = 0;
  constructor(
    private http: HttpClient,
    private backendService: BackendService
  ) {}
  // getData(page: number) {
  //   let url =
  //     'https://jsonmock.hackerrank.com/api/football_matches?year-2011&page=10';
  //   this.backendService.fetch_test_data(url).subscribe((data: string[]) => {
  //     this.arrData = data;
  //     console.log('Fetch Data :', JSON.parse(this.arrData));
  //   });
  // }
  // competition: 'UEFA Champions League';
  // round: 'GroupH';
  // team1: 'Barcelona';
  // team1goals: '2';
  // team2: 'AC Milan';
  // team2goals: '2';
  // year: 2011;
  // process_url() {
  //   for (let i = 1; i < 2; i++) {
  //     this.getData(i);
  //   }
  //   console.log('Matches Drawn :', this.count);
  // }

  ngOnInit(): void {
    // this.process_url();
  }
}

import { Component, OnInit } from '@angular/core';
import { Message } from '@inettech/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'inettech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  apiUrl = '';
  hello$!: Observable<Message>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.apiUrl = environment.BACKEND_URL + '/hello';
    console.log('apiUrl =', this.apiUrl);
    this.hello$ = this.http.get<Message>(this.apiUrl);
  }
}

import { Component, OnInit } from '@angular/core';
import { Message } from '@inettech/api-interfaces';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'inettech-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}

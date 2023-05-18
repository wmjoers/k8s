import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent implements OnInit {
  title = 'my_frontend';
  fromBackend = 'Loading from backend...';
  fromMicroservice = 'Loading from microservice...';

  constructor(
    private http: HttpClient
  ) { 
  }

  async ngOnInit(): Promise<void> {

    this.http.get<{msg: string}>('http://localhost:4000').subscribe(result => {
      this.fromBackend = result.msg;
    });

    this.http.get<{msg: string}>('http://localhost:4000/micro').subscribe(result => {
      this.fromMicroservice = result.msg;
    });

    // console.log('Fetching 1');
    // let backendResp = await fetch('http://localhost:4000');
    // this.fromBackend = await backendResp.text();
    // console.log('Fetching 2');
    // let microserviceResp = await fetch('http://localhost:4000/micro');
    // this.fromMicroservice = await microserviceResp.text();
  }
}

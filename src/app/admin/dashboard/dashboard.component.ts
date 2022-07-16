import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { count } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public counter;
  constructor(private http:HttpClient) {
    this.http.get<{message:string,count:number}>("http://localhost:3000/api/blogCount").subscribe((response)=>{
      this.counter = response.count;
    })
   }
  
  ngOnInit(): void {
  }

}

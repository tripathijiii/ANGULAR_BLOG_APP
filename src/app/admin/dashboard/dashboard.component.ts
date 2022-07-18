import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { count } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public counter;
  constructor(private http:HttpClient,private route:Router) {
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
    this.http.get<{message:string,count:number}>("http://localhost:3000/api/blogCount").subscribe((response)=>{
      this.counter = response.count;
    })
   }
  
  ngOnInit(): void {
  }

}

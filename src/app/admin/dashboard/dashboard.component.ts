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
  public gallerycount;
  public emailiD = localStorage.getItem('userEmail');
  public imageLink = localStorage.getItem('profileImageUrl');
  public name = localStorage.getItem('userName')
  constructor(private http:HttpClient,private route:Router) {
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }

    this.http.post<{message:string,count:number}>("http://localhost:3000/api/blogCount",{email:this.emailiD}).subscribe((response)=>{
      this.counter = response.count;
    })
    this.http.post<{message:string,count:number}>("http://localhost:3000/api/galleryCount",{email:this.emailiD}).subscribe((response)=>{
      this.gallerycount = response.count;
    })
   }
  
  ngOnInit(): void {
  }

}

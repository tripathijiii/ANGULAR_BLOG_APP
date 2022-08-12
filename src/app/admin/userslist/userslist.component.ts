import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';

interface user{
  email:string;
  password:string;
  type:string;
  username:string;
  photo:string;

}


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {
  posts:user[];
  constructor(private http:HttpClient,private route:Router) {
    this.http.get<{message:String,users:user[]}>("http://localhost:3000/api/userslist").subscribe((response)=>{
    this.posts = response.users;
    })
   }

  ngOnInit(): void {
  }
  clickDelete(email:string){
    if(email == localStorage.getItem('userEmail')){
      alert("You cant DELETE YOURSELF ...");
      return;
    }
    console.log("this worked");
    this.http.post<{message:string}>("http://localhost:3000/api/deleteuser",{email:email}).subscribe((response)=>{
    alert("User Deleted !!!");
    this.route.routeReuseStrategy.shouldReuseRoute=()=>false;
    this.route.onSameUrlNavigation = 'reload';
    this.route.navigate(['/user/userList'])
    })
  }

}

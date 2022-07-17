import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

interface user{
  email:string;
  password:string;
  type:string;
  username:string;

}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSignIN(form: NgForm){
    localStorage.setItem('userEmail',form.value.title);
    this.http.post<{message:string,posts:user[]}>("http://localhost:3000/api/usercheck",{title:form.value.title,content:form.value.content}).subscribe((response)=>{
      if(response.posts.length <= 0){
        alert("User credentials wrong or does not exist")
        form.resetForm();
        return;
      }
      localStorage.setItem('userEmail',form.value.title);
      localStorage.setItem('userName',response.posts[0].username);
      localStorage.setItem('type',response.posts[0].type);
      localStorage.setItem('logedIn','true');
      this.route.navigate(['/user']);
    })
  }
}

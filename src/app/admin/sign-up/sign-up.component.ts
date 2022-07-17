import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  onSignUP(form: NgForm){
    this.http.post<{message:String,posts:[]}>("http://localhost:3000/api/useremailcheck",{email:form.value.title}).subscribe((response)=>{
      if(response.posts.length>0){
        alert("This email Already exists !!! Sign In !");
        return;
      }
      else{
        this.http.post<{message:String}>("http://localhost:3000/api/createuser",{email:form.value.title,password:form.value.content,username:form.value.username}).subscribe((response)=>{
          alert("User Created !!!");
          this.route.navigate(['']);
        })
      }
    })
  }
}
 
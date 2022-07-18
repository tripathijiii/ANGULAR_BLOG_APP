import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../posts/posts.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public posts;
  constructor(private http:HttpClient,private route:Router) {
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
    this.http.get<{message:string,posts:Post[]}>("http://localhost:3000/api/allblog").subscribe((response)=>{
      this.posts = response.posts.reverse();
      console.log(this.posts)
    })
   }

  ngOnInit(): void {
  }

}

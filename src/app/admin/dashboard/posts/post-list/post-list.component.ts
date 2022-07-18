import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../posts.model';
import { PostService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {
  posts:Post[]=[]
  private postSub :Subscription;

  constructor(public postService:PostService ,private http:HttpClient,private route:Router) { 
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
    this.postService.getPost();
    this.postSub = this.postService.getUpdateListener().subscribe((posts:Post[])=>{
      //this.posts=posts.reverse();
    })
  }

  ngOnInit(): void {
    this.postService.getPost();
    this.postSub = this.postService.getUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts.reverse();
    })
  }
  ngOnDestroy(): void {
      this.postSub.unsubscribe();
  }
  onClickDelete(index:number){
    console.log(index);
    this.http.post<{message:String}>("http://localhost:3000/api/deletepost",{index:index}).subscribe((response)=>{
      alert("Blog deleted !");
      this.route.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.route.onSameUrlNavigation = 'reload';
      this.route.navigate(['/user/post']);
    })
  }
}
 
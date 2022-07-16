import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(public postService:PostService) { 
    this.postService.getPost();
    this.postSub = this.postService.getUpdateListener().subscribe((posts:Post[])=>{
      this.posts=posts.reverse();
    })
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
      this.postSub.unsubscribe();
  }

}
 
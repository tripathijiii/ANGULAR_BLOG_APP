import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService:PostService,private route:Router) { 
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
  }

  ngOnInit(): void {
  }
  onPostAdded(form : NgForm){
    if(form.invalid){
      return
    }
    this.postService.addPost(form.value.title,form.value.content,form.value.dateTime)
    form.resetForm()
  }

}

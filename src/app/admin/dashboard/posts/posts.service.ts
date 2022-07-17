import { Injectable } from "@angular/core";
import { Post } from "./posts.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PostService{
    private posts:Post[] = [];
    private postUpdated = new Subject<Post[]>();
    constructor(private http:HttpClient){

    }
    getUpdateListener(){
        return this.postUpdated.asObservable();
    }

    addPost(title:string,content:string,dateTime:any){
        const post:Post = {id:null,title,content,email:localStorage.getItem('userEmail'),dateTime:new Date()};
        this.http.post<{message:string}>("http://localhost:3000/api/posts",post).subscribe((response)=>{
            console.log(response.message);
            this.posts.push(post);
            this.postUpdated.next([...this.posts])
        })
    }
    getPost(){
        this.http.post<{message:string,posts:Post[]}>("http://localhost:3000/api/userposts",{email:localStorage.getItem('userEmail')}).subscribe(postData=>{
            this.posts=postData.posts;
            console.log(this.posts);
            this.postUpdated.next([...this.posts]);
        })
    }
}
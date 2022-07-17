import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss']
})
export class AddImageComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  onImageAdded(form:NgForm){
    if(form.invalid){
      return
    }
    this.http.post<{message:string}>("http://localhost:3000/api/allimages",{title:form.value.title,email:localStorage.getItem('userEmail')}).subscribe((response)=>{
      console.log(response);
    })
    form.resetForm();

  }
}

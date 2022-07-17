import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSignIN(form: NgForm){
    localStorage.setItem('userEmail',form.value.title);
    localStorage.setItem('password',form.value.content);
    alert("this is bad")
    return;
    this.route.navigate(['/user']);
  }
}

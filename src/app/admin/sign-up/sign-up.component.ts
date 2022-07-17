import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  onSignUP(form: NgForm){
    localStorage.setItem('userEmail',form.value.title);
    localStorage.setItem('password',form.value.content);
    localStorage.setItem('password',form.value.content);
    alert("this is bad")
    return;
    this.route.navigate(['/user']);
  }
}

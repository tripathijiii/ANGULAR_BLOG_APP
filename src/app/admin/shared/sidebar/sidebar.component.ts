import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name:string;
  email:string;
  type:string;
  photo:string;
  constructor(private route:Router) { 
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
    this.name=localStorage.getItem('userName');
    this.email=localStorage.getItem('userEmail');
    this.type = localStorage.getItem('type');
    this.photo = localStorage.getItem('profileImageUrl');
  }

  ngOnInit(): void {
  }

}

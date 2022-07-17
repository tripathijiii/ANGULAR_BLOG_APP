import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  name:string;
  email:string;
  type:string;
  constructor() { 
    this.name=localStorage.getItem('userName');
    this.email=localStorage.getItem('userEmail');
    this.type = localStorage.getItem('type');
  }

  ngOnInit(): void {
  }

}

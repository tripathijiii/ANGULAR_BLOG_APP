import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { GalleryItem, ImageItem } from 'ng-gallery';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  constructor(private route:Router) { 
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
  }

  ngOnInit(): void {
    
  }

}

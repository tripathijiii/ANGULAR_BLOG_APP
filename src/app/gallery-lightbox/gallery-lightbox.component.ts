import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { animate, style, transition,trigger,AnimationEvent } from '@angular/animations'
import { HttpClient } from '@angular/common/http';
import { MatSidenav } from '@angular/material/sidenav';
interface Item {
  id:number;
  imageSrc: string;
  imageAlt: string;
}


@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrls: ['./gallery-lightbox.component.scss'],
  animations:[
    trigger('animation',[
      transition('void => visible',[
        style({transform: 'scale(0.5)'}),
        animate('150ms',style({transform: 'scale(1)'}))
      ]),
      transition('visible => void',[
        style({transform: 'scale(1)'}),
        animate('150ms',style({transform: 'scale(0.5)'}))
      ]),
    ])
  ]
})
export class GalleryLightboxComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;

  galleryData:Item[] = [];
  previewImage = false;
  showMask = false;
  currentLightboxImage: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount=0;
  showCount=false;
  constructor(private http:HttpClient) {
    this.http.post<{message:string,posts:Item[]}>("http://localhost:3000/api/userimages",{title:localStorage.getItem('userEmail')}).subscribe((response)=>{
      this.galleryData = response.posts;
      this.totalImageCount=this.galleryData.length;
    })
   }

  ngOnInit(): void {
    this.totalImageCount=this.galleryData.length;
    this.sidenav.close();

  }

  onPreviewImage(index:number): void {
    this.showMask=true;
    this.previewImage=true;
    this.currentIndex=index;
    this.currentLightboxImage = this.galleryData[index];
    this.showCount=true;

  }
  onClosePreview(){
    this.previewImage=false;
    this.showMask=false;
  }
  onPrev(){
    if(this.currentIndex>=1){
      this.currentIndex=this.currentIndex-1;
      this.currentLightboxImage = this.galleryData[this.currentIndex];
    }
  }
  onNext(){
    if(this.currentIndex<this.totalImageCount-1){
      this.currentIndex=this.currentIndex+1;
      this.currentLightboxImage = this.galleryData[this.currentIndex];
    }
  }
}

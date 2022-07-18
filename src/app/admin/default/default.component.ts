import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout' 
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements AfterViewInit {
  @ViewChild(MatSidenav)
  sidenav! : MatSidenav;
  constructor(private observer: BreakpointObserver,private route:Router) {
    if(localStorage.getItem('logedIn')!='true'){
      this.route.navigate(['']);
    }
   }
  
  ngAfterViewInit(): void {
      this.observer.observe(['(max-width: 800px']).subscribe((res)=>{
        if(res.matches){
          this.sidenav.mode = 'over';
          this.sidenav.close()
        }
        else{
          this.sidenav.mode='side';
         
        }
      })
  }
  onClickLogout(){
    localStorage.setItem('logedIn',"false");
  }

}

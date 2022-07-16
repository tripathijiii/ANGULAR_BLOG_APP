import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GalleryComponent } from './admin/dashboard/gallery/gallery.component';
import { HomeComponent } from './admin/dashboard/home/home.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { DefaultComponent } from './admin/default/default.component';

const routes: Routes = [
  {path:'',component: DefaultComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'aboutMe',component:DashboardComponent},
    {path:'post',component:PostCreateComponent},
    {path:'gallery',component:GalleryComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

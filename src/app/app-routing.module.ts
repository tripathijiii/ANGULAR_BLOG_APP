import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddImageComponent } from './admin/dashboard/gallery/add-image/add-image.component';
import { GalleryComponent } from './admin/dashboard/gallery/gallery.component';
import { HomeComponent } from './admin/dashboard/home/home.component';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import { DefaultComponent } from './admin/default/default.component';
import { MainPageComponent } from './admin/main-page/main-page.component';
import { SignInComponent } from './admin/sign-in/sign-in.component';
import { SignUpComponent } from './admin/sign-up/sign-up.component';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';

const routes: Routes = [
  {path:'user',component: DefaultComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'aboutMe',component:DashboardComponent},
    {path:'post',component:PostCreateComponent},
    {path:'gallery',component:GalleryComponent,
    children:[
      {path:'',component:GalleryLightboxComponent},
      {path:'addImage',component:AddImageComponent}, 
    ]
    },
  ]
},
{path:'',component:MainPageComponent,
children:[
    {path:'',component:SignInComponent},
    {path:'signUp',component:SignUpComponent},

]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DefaultComponent } from './admin/default/default.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import {MatInputModule} from '@angular/material/input';
import { PostCreateComponent } from './admin/dashboard/posts/post-create/post-create.component';
import {MatCardModule} from '@angular/material/card';
import { PostListComponent } from './admin/dashboard/posts/post-list/post-list.component';
import {MatExpansionModule, MatExpansionPanel} from '@angular/material/expansion';
import { HttpClient, HttpClientModule } from '@angular/common/http';



const UX_Modules =[
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatExpansionModule
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    SidebarComponent,
    DashboardComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UX_Modules,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

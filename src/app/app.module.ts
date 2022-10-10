import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { GentsComponent } from './gents/gents.component';
import { WomensComponent } from './womens/womens.component';

const appRoutes : Routes=[

  {
   path:"" ,component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  },
  {
    path:"gents",component:GentsComponent
  },
  {
    path:"womens",component:WomensComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    GentsComponent,
    WomensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

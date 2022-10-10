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
import { KidsComponent } from './kids/kids.component';
import { FeaturesComponent } from './features/features.component';

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
  },
  {
    path:"kids",component:KidsComponent
  },
  {
    path:"features",component:FeaturesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    GentsComponent,
    WomensComponent,
    KidsComponent,
    FeaturesComponent
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

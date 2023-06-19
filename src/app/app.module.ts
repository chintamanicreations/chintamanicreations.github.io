import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomeComponent } from './section/home/home.component';
import { WhatWeOfferComponent } from './section/what-we-offer/what-we-offer.component';
import { WwoCardComponent } from './section/what-we-offer/wwo-card/wwo-card.component';
import { HighlightsComponent } from './section/highlights/highlights.component';
import { GetAQouteComponent } from './section/get-a-qoute/get-a-qoute.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhatWeOfferComponent,
    WwoCardComponent,
    HighlightsComponent,
    GetAQouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

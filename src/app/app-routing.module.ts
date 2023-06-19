import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './section/home/home.component';
import { WhatWeOfferComponent } from './section/what-we-offer/what-we-offer.component';
import { GetAQouteComponent } from './section/get-a-qoute/get-a-qoute.component';

const routes: Routes = [
  {path :'',component : HomeComponent},
  {path : 'home' , component : HomeComponent,},
  {path : 'what-we-offer' , component : WhatWeOfferComponent},
  {path: 'get-a-qoute',component : GetAQouteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

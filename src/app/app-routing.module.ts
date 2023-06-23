import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './section/home/home.component';
import { WhatWeOfferComponent } from './section/what-we-offer/what-we-offer.component';
import { GetAQouteComponent } from './section/get-a-qoute/get-a-qoute.component';
import { ContactUsComponent } from './section/contact-us/contact-us.component';
import { CategoryComponent } from './section/category/category.component';
import { Categories } from './section/category/categories';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent, },
  { path: 'what-we-offer', component: WhatWeOfferComponent },
  { path: 'get-a-qoute', component: GetAQouteComponent },
  { path: 'contact-us', component: ContactUsComponent },
  {
    path: 'logo-design', component: CategoryComponent, 
    data: {
      'category': Categories.LogoDesign
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component } from '@angular/core';
import { categories } from '../category/categories';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.css']
})
export class WhatWeOfferComponent {
  categories = categories;
}

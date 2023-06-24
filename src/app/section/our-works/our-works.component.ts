import { Component } from '@angular/core';
import { Category } from '../category/category';
import { Categories } from '../category/categories';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent {
 categories : Category[] = [
  Categories.LogoDesign,Categories.LogoDesign
 ]
}

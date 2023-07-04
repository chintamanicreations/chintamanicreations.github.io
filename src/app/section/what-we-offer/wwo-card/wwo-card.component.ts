import { Component, Input } from '@angular/core';
// import { Categories } from '../../category/categories';
import { Category } from '../../category/category';

@Component({
  selector: 'app-wwo-card',
  templateUrl: './wwo-card.component.html',
  styleUrls: ['./wwo-card.component.css']
})
export class WwoCardComponent {
  @Input() category!:Category;
}

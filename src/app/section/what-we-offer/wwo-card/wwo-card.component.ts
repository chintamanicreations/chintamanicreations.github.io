import { Component } from '@angular/core';
import { Categories } from '../../category/categories';

@Component({
  selector: 'app-wwo-card',
  templateUrl: './wwo-card.component.html',
  styleUrls: ['./wwo-card.component.css']
})
export class WwoCardComponent {
  category = Categories.LogoDesign;
}

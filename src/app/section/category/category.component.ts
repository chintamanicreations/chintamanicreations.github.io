import { Component } from '@angular/core';
import { Category } from './category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  category : Category = {
    name: '',
    description: '',
    image: '',
    samples: [],
    route: ''
  }
  constructor(private route : ActivatedRoute){
    this.route.data.subscribe(data =>{
      this.category = data['category'];
    });
    console.log(this.category);
  }
}

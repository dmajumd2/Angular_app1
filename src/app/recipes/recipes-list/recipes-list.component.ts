import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes: Recipe[] = [
	new Recipe('Test Recipe', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg');
	
	new Recipe('Test Recipe', 'Test description', 'https://cdn-maf0.heartyhosting.com/sites/muscleandfitness.com/files/lean-crispy-chicken-breast-recipe.jpg');
];
	
  constructor() { }

  ngOnInit() {
  }

}

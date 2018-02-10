import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [
	new Recipe('Test Recipe', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg'),
	
	new Recipe('Test Recipe', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg'),
	
	new Recipe('Test Recipe', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg')		
];
	
	
	getRecipes(){
		return this.recipes.slice();
	}
}
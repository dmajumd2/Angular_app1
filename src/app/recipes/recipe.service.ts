import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	
	private recipes: Recipe[] = [
	new Recipe('Chicken', 'A Super tasty', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg', [
		new Ingredient('Meat', 1),
		new Ingredient('French Fries', 20)
	]),
	
	new Recipe('Burger', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg', [
		new Ingredient('Buns', 2),
		new Ingredient('Meat', 1)
	]),
	
	new Recipe('Pizza', 'Test description', 'http://img.taste.com.au/QOHMXuXS/w720-h480-cfill-q80/taste/2016/11/chicken-cacciatore-tray-bake-83394-1.jpeg', [
		new Ingredient('Cheese', 5),
		new Ingredient('Vegetables', 30)
	])		
];
	
	constructor(private slService: ShoppingListService){}
	
	getRecipes(){
		return this.recipes.slice();
	}
	
	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredientsToSL(ingredients);
	}
}
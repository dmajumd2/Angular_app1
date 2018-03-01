import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();
	
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
	
	getRecipe(index: number){
		return this.recipes[index];
	}
	
	addIngredientsToShoppingList(ingredients: Ingredient[]){
		this.slService.addIngredientsToSL(ingredients);
	}
	
	addRecipe(recipe: Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}
	
	updateRecipe(index: number, newRecipe: Recipe){
		this.recipes[index]=newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}
	
	deleteRecipe(index: number){
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}
}
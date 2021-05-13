import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
        'Snitel cu ce trebuie!', 
        'https://bucatelenoastre.ro/wp-content/uploads/2017/02/Snitel-din-piept-de-pui-cu-ou-si-pesmet.jpg',
         [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)   
         ]),
        new Recipe('Another test recipe',
         'Mare burger pentru grasu!',
          'https://dafjunior.ro/wp-content/uploads/2020/08/DAF-burger-dan-1.jpg', 
          [
             new Ingredient('Buns', 2),
             new Ingredient('Meat', 1) 
          ])
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}
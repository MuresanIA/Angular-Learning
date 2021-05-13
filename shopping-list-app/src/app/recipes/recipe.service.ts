import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A test recipe', 'This is simply a test', 'https://www.blondelish.com/wp-content/uploads/2020/04/Keto-Stuffed-Cabbage-Rolls-Gluten-Free-Low-Carb-Recipe-10.jpg'),
        new Recipe('Another test recipe', 'This is simply a test', 'https://www.blondelish.com/wp-content/uploads/2020/04/Keto-Stuffed-Cabbage-Rolls-Gluten-Free-Low-Carb-Recipe-10.jpg')
      
      ];

      getRecipes(){
          return this.recipes.slice();
      }
}
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
@Injectable()
export class RecipeService {
   recipeSelected = new EventEmitter<Recipe>();
    recipes : Recipe[] = [
        new Recipe('Goli Baje','Dough balls','http://udupi-recipes.com/wp-content/uploads/2012/08/Goli-baje.jpg',[new Ingredient('Maida',10),new Ingredient('oil',2)]),
        new Recipe('Neer Dose','Rice Crepes','http://udupi-recipes.com/wp-content/uploads/2012/08/Goli-baje.jpg',[new Ingredient('Rice',20),new Ingredient('Coconut',1)])
      ];

      getRecipes()
      {
          return this.recipes.slice();
      }

      getRecipeById(index:number)
      {
          return this.recipes[index];
      }

      constructor(private slService : ShoppingListService)
      {
            
      }

      addIngredientsToShoppingList(ingredients : Ingredient[])
      {
            this.slService.addNewIngredients(ingredients);
      }
}
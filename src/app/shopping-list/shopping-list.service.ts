import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "../../../node_modules/@angular/core";

export class ShoppingListService {
  broadCatIngredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients : Ingredient[] = [
        new Ingredient("Tomato",20),
        new Ingredient("Potato",10)
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }

      addNewIngredient(ingredient:Ingredient)
      {   
        this.ingredients.push(ingredient);
        this.broadCatIngredientsChanged.emit(this.ingredients.slice());
      }

      addNewIngredients(ingredients : Ingredient[])
      {
        this.ingredients.push(...ingredients);
        this.broadCatIngredientsChanged.emit(this.ingredients.slice());
      }
}
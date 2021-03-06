import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes :Recipe[];

  @Output() recipeEmitter = new EventEmitter<Recipe>();
  constructor(private recipeService : RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
  }

  onRecipeItemClicked(recipe:Recipe)
  {   
    this.recipeService.recipeSelected.emit(recipe);
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Goli Baje','Dough balls','http://udupi-recipes.com/wp-content/uploads/2012/08/Goli-baje.jpg'),
    new Recipe('Neer Dose','Rice Crepes','http://udupi-recipes.com/wp-content/uploads/2012/08/Goli-baje.jpg')
  ];

  @Output() recipeEmitter = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onRecipeItemClicked(recipe:Recipe)
  {
    this.recipeEmitter.emit(recipe);
  }

}

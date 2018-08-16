import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { Route } from '../../../../node_modules/@angular/compiler/src/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

id:number;
recipeDetail :Recipe
  constructor(private recipeService : RecipeService,private route : ActivatedRoute,private router:Router) { }
recipieId:number;
  ngOnInit() {
  
  this.route.params.subscribe((param:Params)=>{
    this.id =+param['id'];
    this.recipeDetail = this.recipeService.getRecipeById(this.id);
    });
  
  }

  addToShoppingBag()
  {
     this.recipeService.addIngredientsToShoppingList(this.recipeDetail.ingredients);
  }

  onEditClick()
  {
    this.router.navigate(["edit"],{relativeTo:this.route});
  }
}

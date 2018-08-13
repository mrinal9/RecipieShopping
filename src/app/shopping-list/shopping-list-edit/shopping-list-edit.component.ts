import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addEmmiter = new EventEmitter<Ingredient>();
  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(ingName:string,ingAmount:number)
  {     
    this.shoppingListService.addNewIngredient(new Ingredient(ingName,ingAmount));
  }
}

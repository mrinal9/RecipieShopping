import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @Output() addEmmiter = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(ingName:string,ingAmount:number)
  {
  this.addEmmiter.emit(new Ingredient(ingName,ingAmount));
  }
}

import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router"

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes : Routes = [
    {path : '' ,redirectTo :'/recipies' , pathMatch:'full'},
    {path :'recipies', component:RecipesComponent},
    {path :'shoppingList', component:ShoppingListComponent}
  ]

@NgModule ({
    imports: [     
        RouterModule.forRoot(appRoutes)
      ],
      exports:[RouterModule]
})

export class AppRoutingModule
{

}

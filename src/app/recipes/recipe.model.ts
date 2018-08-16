import { Ingredient } from "../shared/ingredient.model";

export class Recipe
{
   id:number;
    name : string;
    description : string;
    imageUrl : string;
    ingredients : Ingredient[];
    constructor(name:string,description:string,imageUrl:string,ingredients:Ingredient[]) {
        
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;        
        this.ingredients = ingredients;
    }
}
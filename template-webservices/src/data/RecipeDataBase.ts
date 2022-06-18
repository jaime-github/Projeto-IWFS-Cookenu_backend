import { Recipe } from "../entities/recipe";
import { BaseDatabase } from "./BaseDataBase";

export class RecipeDatabase extends BaseDatabase {

  public async createRecipe(recipe: Recipe){
    try{
      await BaseDatabase.connection("Cookenu_recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        date: recipe.getDate()
      })
    } catch(error: any){
        throw new Error(error.sqlMessage || error.message)
    }
  }
  public async getRecipe(id: string): Promise<Recipe>{
    try{
      const recipe:any = await BaseDatabase
      .connection('Cookenu_recipes')
      .select('id', 'title', 'description', 'date')
      .where('id', id)
      return recipe

    } catch (error: any){
      throw new Error(error.sqlMessage || error.message);
    } 
  }
}
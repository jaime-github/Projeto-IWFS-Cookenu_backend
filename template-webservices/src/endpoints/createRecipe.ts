import {Request, Response} from 'express';
import { RecipeDatabase } from '../data/RecipeDataBase';
import { Recipe } from '../entities/recipe';
import { Authenticator } from '../services/Authenticator';
import { IdGenerator } from '../services/IdGenerator';

export const CreateRecipe = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("This endpoint requires a token.")
        } 
        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const {title, description} = req.body

        if(!title || !description){
            res.statusCode = 422
         throw "Please, insert the informations correctly. Fields are mandatory!"
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const recipeDatabase = new RecipeDatabase()
        const newRecipe = new Recipe(id, title, description) 
        await recipeDatabase.createRecipe(newRecipe)

        res.status(200).send({message: 'Recipe created with success'})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}



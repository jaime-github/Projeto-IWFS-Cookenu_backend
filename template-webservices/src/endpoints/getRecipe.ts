import { Request, Response } from "express"
import { RecipeDatabase } from "../data/RecipeDataBase"
import { Authenticator } from "../services/Authenticator"

export const getRecipe = async (req: Request, res: Response) => {
    try {
        const { id }= req.params 

        const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("This endpoint requires a token.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        const recipeDatabase = new RecipeDatabase()
        const recipe = await recipeDatabase.getRecipe(id)

        res.status(200).send(recipe)

    } catch(error){
        res.status(400).send(error.message)
    }
}


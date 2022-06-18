import { Request, Response } from "express"
import { rmSync } from "fs"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
export const getProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization

        if(!token) {
          res
            .status(422)
            .send("Esse endpoint exige um token.")
        }

        const authenticator = new Authenticator()
        const tokenData = authenticator.getTokenData(token)

        if(tokenData.role !== 'ADMIN') {
            res.status(401).send('Acesso somente para administradores!')
        }
        const userDatabase = new UserDatabase()
        const users = await userDatabase.getAllUsers()

        res.status(200).send(users)

    } catch(error:any) {
        res.status(400).send(error.message)
    }
}


import {Request, Response} from 'express';
import { UserDatabase } from '../data/UserDatabase';
import { User } from '../entities/user';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';
import { IdGenerator } from '../services/IdGenerator';

export const Signup = async (req: Request, res: Response) => {
    try {
        const {name, email, password, role} = req.body

        if(!name || !email || !password || !role){
            res.statusCode = 422
         throw "Insira corretamente as Informações. Campos obrigatórios!"
        }
        if (!req.body.email || req.body.email.indexOf("@") === -1 || !req.body.role) {
            throw new Error("Invalid email");
        }

        if (!req.body.password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }

        const userDatabase = new UserDatabase()
        const user = await userDatabase.findUserByEmail(email)

        if(user){
            res.statusCode = 409
            throw "Esse email já está cadastrado!"
        }

        const idGenerator = new IdGenerator()
        const id = idGenerator.generate()

        const hashManager = new HashManager()
        const hasPassword = await hashManager.hash(password)

        const newUser = new User(id, name, email, hasPassword, role) 
        await userDatabase.createUser(newUser)

        const authenticator = new Authenticator()
        const token = authenticator.generate({id, role})

        res.status(200).send({message: 'Usuário criado com sucesso', token})

    } catch (error: any) {
        res.status(400).send(error.message)
    }
}
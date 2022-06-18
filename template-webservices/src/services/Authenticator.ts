import * as jwt from 'jsonwebtoken'
import { USER_ROLES } from '../entities/user'
import dotenv from 'dotenv'

dotenv.config()

const jwtNew: any = process.env.JWT_KEY

export interface AuthenticatonData {
    id: string,
    role: USER_ROLES
}

export class Authenticator {


    public generate(input: AuthenticatonData): string {

        const token = jwt.sign(input, jwtNew,{
            expiresIn:process.env.EXPIRES_IN,
        })
        return token;
    }
    public getTokenData(token: string): AuthenticatonData{
        const data = jwt.verify(token, jwtNew)
        return data as unknown as AuthenticatonData
    }
}
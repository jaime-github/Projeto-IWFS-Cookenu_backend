import { User } from "../entities/user";
import { BaseDatabase } from "./BaseDataBase";

export class UserDatabase extends BaseDatabase {
  public async createUser(user: User){
    try{
      await BaseDatabase.connection("Cookenu_user").insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole()
      })
    } catch(error: any){
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
        const user = await BaseDatabase.connection('Cookenu_user')
        .select('*')
        .where({ email })
    return user[0] && User.toUserModel(user[0])

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getAllUsers(): Promise<User[]>{
    try{
      const users = await BaseDatabase.connection('Cookenu_user').select(
        'id', 
        'name', 
        'email', 
        'role'
        );
        return users.map((user => User.toUserModel(user)))

    }catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    } 
  }
  public async getUser(id: string): Promise<User>{
    try{
      const user:any = await BaseDatabase.connection('Cookenu_user').select('id', 'name', 'email').where('id', id)
      return user

    } catch (error: any){
      throw new Error(error.sqlMessage || error.message);
    } 
  }
}
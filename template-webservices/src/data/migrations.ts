import { BaseDatabase } from "./BaseDataBase"


const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => BaseDatabase.connection
   .raw(`
   CREATE TABLE IF NOT EXISTS Cookenu_user (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL
   );

   CREATE TABLE IF NOT EXISTS Cookenu_recipes (
      id VARCHAR(255) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );

   CREATE TABLE IF NOT EXISTS Cookenu_user_recipes (
      user_id VARCHAR(255),
      recipe_id VARCHAR(255),
      FOREIGN KEY (user_id) REFERENCES Cookenu_user(id),
      FOREIGN KEY (recipe_id) REFERENCES Cookenu_recipes(id)
   );
      
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const closeConnection = () => { BaseDatabase.connection.destroy() }

createTables()
  
   .finally(closeConnection)
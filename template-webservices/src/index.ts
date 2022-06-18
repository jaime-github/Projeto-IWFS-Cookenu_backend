import app from "./app"
import { CreateRecipe } from "./endpoints/createRecipe"
import { getProfile } from "./endpoints/getProfile"
import { getRecipe } from "./endpoints/getRecipe"
import { getUser } from "./endpoints/getUser"
import { Login } from "./endpoints/login"
import { Signup } from "./endpoints/signUp"

app.post('/signup', Signup)
app.post('/login', Login)
app.get('/user/profile', getProfile)
app.get('/user/:id', getUser)
app.post('/recipes', CreateRecipe)
app.get('/recipes/:id', getRecipe)
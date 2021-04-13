import {Router} from 'express'
import UserController from './controllers/UserController'

const userController = new UserController()
const routes = Router()

routes.post("/user",userController.create)
routes.get("/user",userController.index)

export default routes
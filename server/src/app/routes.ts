import {Router} from 'express'
import ClassController from './controllers/ClassController'
import SubjectController from './controllers/SubjectController'
import UserController from './controllers/UserController'

const userController = new UserController()
const classController = new ClassController()
const subjectController = new SubjectController()
const routes = Router()

routes.post("/user",userController.create)
routes.get("/user",userController.index)
routes.post("/class",classController.create)
routes.post("/subject",subjectController.create)

export default routes
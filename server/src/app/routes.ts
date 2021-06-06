import { Router } from 'express';
import ClassController from './controllers/ClassController';
import SessionController from './controllers/SessionController';
import SubjectController from './controllers/SubjectController';
import UserController from './controllers/UserController';
import verifyToken from './middlewares/verifyToken';
import userSchema from '../validation/userSchema';
import subjectSchema from '../validation/subjectSchema';
import classSchema from '../validation/classSchema';

const userController = new UserController();
const classController = new ClassController();
const subjectController = new SubjectController();
const sessionController = new SessionController();
const routes = Router();

routes.post('/user', userSchema, userController.create);
routes.post('/session', sessionController.create);

routes.use(verifyToken);
routes.get('/user', userController.index);
routes.post('/class', classSchema, classController.create);
routes.post('/subject', subjectSchema, subjectController.create);

export default routes;

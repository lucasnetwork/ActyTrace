import express from 'express';
import { errors } from 'celebrate';
import dotenv from 'dotenv';
import routes from './app/routes';
import createConnection from './database';
import 'reflect-metadata';

dotenv.config();
createConnection();
class Server {
  app: any;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();

    this.app.use(errors());
  }

  routes() {
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(express.json());
  }
}

export default new Server().app;

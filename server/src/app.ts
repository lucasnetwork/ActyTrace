import express,{Express} from 'express';
import routes from './app/routes'
class Server {
  app:Express;

  constructor() {
    this.app = express();
    this.routes()
  }

  routes() {
    this.app.use(routes)
  }

  middlewares() {}
}

export default new Server().app;

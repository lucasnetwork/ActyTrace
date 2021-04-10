import express,{Express} from 'express';
import routes from './app/routes'
import createConnection from './database'
createConnection()
class Server {
  app:Express;

  constructor() {
    this.app = express();
    this.middlewares()
    this.routes()
  }

  routes() {
    this.app.use(routes)
  }

  middlewares() {
    this.app.use(express.json())
  }
}

export default new Server().app;

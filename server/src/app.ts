import express from 'express';

class Server{
    app;
    constructor(){
        this.app = express()
    }
    
    routes(){

    }

    middlewares(){

    }
}

export default new Server().app
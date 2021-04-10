import {Request,Response} from 'express'

class UserController{
    async create(req:Request,res:Response){
        console.log("oio")
    }
}

export default UserController
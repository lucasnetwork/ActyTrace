import {Request,Response} from 'express'
import {getManager} from 'typeorm'
import User from '../../database/entities/User'

class UserController{
    async create(req:Request,res:Response){
        console.log(req.body)
        const entityManager  =  getManager()
        const user = await entityManager.create(User,req.body)
        console.log(user)
        return res.status(200).json(user)
    }
}

export default UserController
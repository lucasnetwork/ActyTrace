import bcrypt from 'bcrypt'
import User from '../../database/entities/User'
import {Request,Response} from 'express'
import { getRepository } from 'typeorm'

class SessionController{
    async create(req:Request,res:Response){
        const {email,password} = req.body

        const entitieManageUser = getRepository(User)
        try{
            const existUser = await entitieManageUser.findOne({email})

            if(!existUser){
                return res.status(400).json({error:"user not exist"})
            }
            
            const compare =await bcrypt.compareSync(password,existUser.password)
                
            console.log(compare)
            return res.status(200).json(compare)

        }catch{
            return res.status(400).json({error:"user not exist"})

        }
    }
}

export default SessionController
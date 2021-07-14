import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import User from '../../database/entities/User';
import NodeMailerConfig from '../config/mailConfig';

class UserController {
  async create(req: Request, res: Response) {
    const { email, name, password, type } = req.body;
    const entityManager = getRepository(User);
    try {
      const existUser = await entityManager.findOne({ email });
      if (existUser) {
        return res.status(400).json({ error: 'User exist' });
      }
      const hash = await bcrypt.hash(password, 10);
      const user = entityManager.create({ email, name, password: hash, type });
      await entityManager.save(user);
      const nodeMail = new NodeMailerConfig();
      await nodeMail.execute(
        'daemon@nodemailer.com',
        'mailer@nodemailer.com',
        'Bem vindo',
        'Benvindo usuario'
      );

      return res.status(201).json(user);
    } catch {
      return res.status(400).json({ error: 'error' });
    }
  }

  async index(req: Request, res: Response) {
    const entityManager = getRepository(User);
    const user = await entityManager.find();
    return res.status(200).json(user);
  }
}

export default UserController;

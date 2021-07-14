import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import jwt from 'jsonwebtoken';
import User from '../../database/entities/User';
import NodeMailerConfig from '../config/mailConfig';

class SessionController {
  async create(req: Request, res: Response) {
    const { email, password } = req.body;

    const entitieManageUser = getRepository(User);
    try {
      const existUser = await entitieManageUser.findOne({ email });

      if (!existUser) {
        return res.status(400).json({ error: 'user not exist' });
      }

      const compare = bcrypt.compareSync(password, existUser.password);
      if (!compare) {
        return res.status(400).json({ error: 'password error' });
      }

      const token = jwt.sign({ id: existUser.id }, '32132', {
        expiresIn: 60 * 60 * 24 * 10,
      });
      const nodeMail = new NodeMailerConfig();
      await nodeMail.execute(
        'daemon@nodemailer.com',
        'mailer@nodemailer.com',
        'Um novo login foi feito',
        'novo login'
      );
      return res.status(200).json({ token });
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: 'user not exist' });
    }
  }
}

export default SessionController;

import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Subject from '../../database/entities/Subject';
import Classes from '../../database/entities/Class';
import User from '../../database/entities/User';

class ClassController {
  async create(req: Request, res: Response) {
    const { name, idTeacher, idSubject } = req.body;
    const entityManagerClass = getRepository(Classes);
    const entityManagerUser = getRepository(User);
    const entityManagerSubject = getRepository(Subject);
    try {
      const existTeacher = await entityManagerUser.findOne({
        where: {
          id: idTeacher,
          type: 'teacher',
        },
      });

      if (!existTeacher) {
        return res.status(400).json({ error: 'teacher not exist' });
      }

      const existSubject = await entityManagerSubject.findOne({
        id: idSubject,
      });

      if (!existSubject) {
        return res.status(400).json({ error: 'subject not exist' });
      }

      const newClass = entityManagerClass.create({
        name,
        teacher: idTeacher,
        subject: idSubject,
      });
      await entityManagerClass.save(newClass);
      return res.status(201).json(newClass);
    } catch (e) {
      return res.status(400).json({ error: e });
    }
  }
}

export default ClassController;

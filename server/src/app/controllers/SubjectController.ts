import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Subject from '../../database/entities/Subject';

class SubjectController {
  async create(req: Request, res: Response) {
    const { name, description } = req.body;
    const entityManagerSubject = getRepository(Subject);
    try {
      const newSubject = entityManagerSubject.create({ name, description });
      await entityManagerSubject.save(newSubject);
      return res.status(201).json(newSubject);
    } catch {
      return res.status(400).json({ error: 'error' });
    }
  }
}

export default SubjectController;

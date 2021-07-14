import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).json({ error: 'error' });
  }

  const tokenArray = authorization.split(' ');

  if (tokenArray === undefined) {
    return res.status(403).json({ error: 'Token é necessário' });
  }
  const [, token] = tokenArray;
  try {
    jwt.verify(token, '32132');
  } catch (e) {
    console.log(e);
    return res.status(403).json({ error: 'token invalido' });
  }
  const decoded: any = jwt.decode(token);
  req.token = decoded;

  next();
}

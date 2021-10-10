import Unauthorized from '@/errors/Unauthorized';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

const publicRoutes = [
  '/api/user/login',
];

const AuthHandler = (req: Request, res: Response, _: NextFunction): void => {
  if (publicRoutes.includes(req.path)) return _();

  const authHeader = req.headers.authorization;

  if (!authHeader) throw new Unauthorized();
  const token = authHeader.split(' ')[1];

  try {
    verify(token, process.env.JWT_SECRET);
    return _();
  } catch {
    throw new Unauthorized();
  }
};

export default AuthHandler;

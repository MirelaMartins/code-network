import { Request, Response } from 'express';
import {
  userGetService, userDeleteService, userPostService, userLoginService,
} from '@/services/User';

const userGet = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await userGetService(id);

  res.send(data);
};

const userPost = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  await userPostService(data);

  res.status(201);
};

const userDelete = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  await userDeleteService(id);
  res.end();
};

const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { id, password } = req.body;

  const token = await userLoginService(id, password);

  res.send(token);
};

export {
  userGet, userDelete, userPost, userLogin,
};

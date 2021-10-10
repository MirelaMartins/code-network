import { Request, Response } from 'express';
import {
  retrieveUserService, deleteUserService, loginUserService, createUserService,
} from '@/services/User';

const retrieveUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await retrieveUserService(id);

  res.send(data);
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  const auth = await createUserService(data);

  res.send(auth);
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;

  await deleteUserService(id);
  res.end();
};

const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { id, password } = req.body;

  const token = await loginUserService(id, password);

  res.send(token);
};

export {
  retrieveUser, deleteUser, createUser, userLogin,
};

import { Request, Response } from 'express';

import {
  retrieveUserService, deleteUserService, loginUserService, createUserService,
} from '@/services/User';
import { IUser } from '@/models/User';

const retrieveUser = async (req: Request, res: Response): Promise<void> => {
  const { _id } = req.params;
  const data = await retrieveUserService(_id);

  res.send(data);
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  const userData: IUser = req.body;

  const auth = await createUserService(userData);

  res.send(auth);
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { _id } = req.body;

  await deleteUserService(_id);
  res.end();
};

const userLogin = async (req: Request, res: Response): Promise<void> => {
  const { _id, password } = req.body;

  const token = await loginUserService(_id, password);

  res.send(token);
};

export {
  retrieveUser, deleteUser, createUser, userLogin,
};

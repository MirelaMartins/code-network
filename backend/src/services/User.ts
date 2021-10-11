import { LeanDocument } from 'mongoose';

import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { IUser } from '@/models/User';
import { retrieveUser, createUser, deleteUser } from '@/repositories/User';
import generateAuthToken from '@/services/JWT';

const retrieveUserService = async (id: string): Promise<LeanDocument<IUser>> => {
  const user = await retrieveUser(id);

  return user;
};

const createUserService = async (data: IUser): Promise<string> => {
  const user = await createUser(data);

  if (!user) throw new NotCreated();

  return generateAuthToken(user._id);
};

const deleteUserService = async (id: string): Promise<LeanDocument<IUser>> => {
  const user = await deleteUser(id);

  return user;
};

const loginUserService = async (id: string, password: string): Promise<string> => {
  const user = await retrieveUser(id);

  if (!user) throw new NotFound();
  if (user.password !== password) throw new Unauthorized();

  return 'ok';
};

export {
  retrieveUserService, deleteUserService, createUserService, loginUserService,
};

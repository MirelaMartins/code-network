import { LeanDocument } from 'mongoose';

import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { IUser } from '@/models/User';
import { retrieveUser, createUser, deleteUser } from '@/repositories/User';
import generateAuthToken from '@/services/JWT';
import { compareHashedInfo, hashSensitiveInfo } from '@/utils/HashSensitiveInfo';

const retrieveUserService = async (id: string): Promise<LeanDocument<IUser>> => {
  const user = await retrieveUser(id);

  return user;
};

const createUserService = async (userData: IUser): Promise<string> => {
  const password = await hashSensitiveInfo(userData.password);
  const user = await createUser({ ...userData, password });

  if (!user) throw new NotCreated();

  return generateAuthToken(user.name, user.email);
};

const deleteUserService = async (id: string): Promise<LeanDocument<IUser>> => {
  const user = await deleteUser(id);

  return user;
};

const loginUserService = async (id: string, password: string): Promise<string> => {
  const user = await retrieveUser(id);

  if (!user) throw new NotFound();

  if (await compareHashedInfo(password, user.password)) {
    return generateAuthToken(user.name, user.email);
  }

  throw new Unauthorized();
};

export {
  retrieveUserService, deleteUserService, createUserService, loginUserService,
};

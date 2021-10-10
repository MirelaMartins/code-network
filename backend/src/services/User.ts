import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { IUser } from '@/models/User';
import { deleteUserDB, getUserDB, postUserDB } from '@/repositories/User';

const userGetService = async (id: string): Promise<IUser> => {
  const user = await getUserDB(id);

  return user;
};

const userPostService = async (data: IUser): Promise<void> => {
  const user = await postUserDB(data);

  if (!user) throw new NotCreated();
};

const userDeleteService = async (id: string): Promise<IUser> => {
  const user = await deleteUserDB(id);

  return user as IUser;
};

const userLoginService = async (id: string, password: string): Promise<string> => {
  const user = await getUserDB(id);

  if (!user) throw new NotFound();
  if (user.password !== password) throw new Unauthorized();

  return 'ok';
};

export {
  userGetService, userDeleteService, userPostService, userLoginService,
};

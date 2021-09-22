import NotCreated from '@/errors/NotCreated';
import { IUsuario } from '@/model/Usuario';
import { getUserDB, deleteUserDB, postUserDB } from '@/repository/Usuario';

const userGetService = async (id: string): Promise<IUsuario> => {
  const usuario = await getUserDB({ id });

  return usuario as IUsuario;
};

export const userPostService = async (data: IUsuario): Promise<void> => {
  const user = await postUserDB(data);

  if (!user) throw new NotCreated();
};

const userDeleteService = async (id: string): Promise<IUsuario> => {
  const usuario = await deleteUserDB(id);

  return usuario as IUsuario;
};

export { userGetService, userDeleteService };

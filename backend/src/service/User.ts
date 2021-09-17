import { IUsuario } from '@/model/Usuario';
import { getUserDB, deleteUserDB, postUserDB } from '@/repository/Usuario';

const userGetService = async (id?: string): Promise<IUsuario> => {
  const usuario = await getUserDB();

  return usuario as IUsuario;
};

export const userPostService = async (data: IUsuario): Promise<number> => {
  try {
    await postUserDB(data);
    return 1;
  } catch (error) {
    return 0;
  }
};

const userDeleteService = async (id: string): Promise<IUsuario> => {
  const usuario = await deleteUserDB(id);

  return usuario as IUsuario;
};

export { userGetService, userDeleteService };

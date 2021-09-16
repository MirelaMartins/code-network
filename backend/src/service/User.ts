import { IUsuario } from '@/model/Usuario';
import getUserDB from '@/repository/Usuario';

const userGetService = async (_id?: string): Promise<IUsuario> => {
  const usuario = await getUserDB();

  return usuario as IUsuario;
};

export default userGetService;

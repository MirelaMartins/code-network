import Usuario, { IUsuario } from '@/model/Usuario';

const getUserDB = async (id: Record<string, any> = {}): Promise<IUsuario[] | IUsuario> => Usuario.find(id).lean().exec();
const deleteUserDB = async (id: string): Promise<any> => Usuario.findByIdAndDelete(id).lean().exec();
const postUserDB = async (data: IUsuario): Promise<IUsuario> => Usuario.create(data);

export { getUserDB, deleteUserDB, postUserDB };

import Usuario, { IUsuario } from '@/model/Usuario';

const getUserDB = async (): Promise<any> => Usuario.find({ }).lean().exec();
const deleteUserDB = async (id: string): Promise<any> => Usuario.findByIdAndDelete(id).lean().exec();
const postUserDB = async (data: IUsuario): Promise<any> => Usuario.create(data);

export { getUserDB, deleteUserDB, postUserDB };

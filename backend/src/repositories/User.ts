import User, { IUser } from '@/models/User';

// const getUsersDB = async (id: Record<string, any> = {}): Promise<IUsuario[] | IUsuario> => Usuario.find(id).lean().exec();
const getUserDB = async (id: string): Promise<IUser> => User.findById(id).lean().exec();
const deleteUserDB = async (id: string): Promise<any> => User.findByIdAndDelete(id).lean().exec();
const postUserDB = async (data: IUser): Promise<IUser> => User.create(data);

export { getUserDB, deleteUserDB, postUserDB };

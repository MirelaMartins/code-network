import User, { IUser } from '@/models/User';

const retrieveUser = async (id: string): Promise<IUser> => User.findById(id).lean().exec();
const deleteUser = async (id: string): Promise<IUser> => User.findByIdAndDelete(id).lean().exec();
const createUser = async (data: IUser): Promise<IUser> => User.create(data);

export { retrieveUser, deleteUser, createUser };

import User, { IUser } from '@/models/User';
import { LeanDocument } from 'mongoose';

const retrieveUser = async (id: string): Promise<LeanDocument<IUser>> => User.findById(id).lean().exec();
const deleteUser = async (id: string): Promise<LeanDocument<IUser>> => User.findByIdAndDelete(id).lean().exec();
const createUser = async (data: LeanDocument<IUser>): Promise<IUser> => User.create(data);

export { retrieveUser, deleteUser, createUser };

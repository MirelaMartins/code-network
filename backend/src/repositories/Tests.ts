import Tests, { ITests } from '@/models/Tests';
import { LeanDocument } from 'mongoose';

const retrieveTests = async (id: string): Promise<LeanDocument<ITests>> => Tests.findById(id).lean().exec();
const deleteTests = async (id: string): Promise<LeanDocument<ITests>> => Tests.findByIdAndDelete(id).lean().exec();
const updateTests = async (id: string, update: Record<string, any>): Promise<any> => Tests
  . updateOne({ id }, update).lean().exec();
const createTests = async (data: ITests): Promise<ITests> => Tests.create(data);
const getAllTests = async (): Promise<LeanDocument<ITests>[]> => Tests.find().lean().exec();

export {
  retrieveTests, deleteTests, createTests, updateTests, getAllTests,
};

import JobOpening, { IJobOpening } from '@/models/JobOpening';
import { LeanDocument } from 'mongoose';

const retrieveJob = async (id: string): Promise<LeanDocument<IJobOpening>> => JobOpening.findById(id).lean().exec();
const deleteJob = async (id: string): Promise<LeanDocument<IJobOpening>> => JobOpening.findByIdAndDelete(id).lean().exec();
const updateJob = async (id: string, update: Record<string, any>): Promise<any> => JobOpening
  . updateOne({ id }, update).lean().exec();
const createJob = async (data: IJobOpening): Promise<IJobOpening> => JobOpening.create(data);
const getAllJobs = async (): Promise<LeanDocument<IJobOpening>[]> => JobOpening.find().lean().exec();

export {
  retrieveJob, deleteJob, createJob, updateJob, getAllJobs,
};

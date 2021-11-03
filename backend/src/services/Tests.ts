import { LeanDocument } from 'mongoose';

import NotCreated from '@/errors/NotCreated';
import NotFound from '@/errors/NotFound';
import Unauthorized from '@/errors/Unauthorized';
import { ITests } from '@/models/Tests';
import {
  retrieveTests, createTests, deleteTests, updateTests, getAllTests
} from '@/repositories/Tests';
import Permission from '@/enums/Permission';
import { retrieveUserService } from './User';

const retrieveTestsService = async (id: string): Promise<LeanDocument<ITests>> => {
  const Tests = await retrieveTests(id);

  if (!Tests) throw new NotFound();
  return Tests;
};

const updateTestsService = async (data: Partial<ITests>, idUser: string, idTests: string): Promise<void> => {
  const user = await retrieveUserService(idUser);

  if (!user || user.permission !== Permission.teacher) throw new Unauthorized();

  await updateTests(idTests, data);
};

const createTestsService = async (data: ITests): Promise<string> => {
  const Tests = await createTests(data);

  if (!Tests) throw new NotCreated();

  return Tests.id;
};

const deleteTestsService = async (id: string): Promise<LeanDocument<ITests>> => {
  const Tests = await deleteTests(id);

  return Tests;
};

const getAllTestsService = async (): Promise<LeanDocument<ITests>[]> => {
  const Tests = await getAllTests();

  if (!Tests) throw new NotFound();
  return Tests;
};

export {
  retrieveTestsService, deleteTestsService, createTestsService, updateTestsService, getAllTestsService,
};

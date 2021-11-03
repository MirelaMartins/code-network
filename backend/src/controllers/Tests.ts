import { Request, Response } from 'express';

import {
  retrieveTestsService, deleteTestsService, createTestsService, updateTestsService, getAllTestsService,
} from '@/services/Tests';

const retrieveTests = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const data = await retrieveTestsService(id);

  res.send(data);
};

const createTests = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  const auth = await createTestsService(data);

  res.send(auth);
};

const updateTests = async (req: Request, res: Response): Promise<void> => {
  const { data, idUser } = req.body;
  const { idTests } = req.params;

  await updateTestsService(data, idUser, idTests);

  res.end();
};

const deleteTests = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.body;

  await deleteTestsService(id);
  res.end();
};

const getAllTests = async (req: Request, res: Response): Promise<void> => {
  const data = await getAllTestsService();

  res.send(data);
};

export {
  retrieveTests, deleteTests, createTests, updateTests, getAllTests,
};

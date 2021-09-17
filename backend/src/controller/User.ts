import { Request, Response } from 'express';
import { userGetService, userDeleteService, userPostService } from '@/service/User';

const userGet = async (req: Request, res: Response): Promise<void> => {
  const data = await userGetService();

  res.send(data);
};

const userPost = async (req: Request, res: Response): Promise<void> => {
  const { data } = req.body;

  const resp = await userPostService(data);

  if (!resp) {
    res.status(503).send('Não foi possível');
  }
  res.send('ok');
};

const userDelete = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  await userDeleteService(id);
  res.end();
};

export { userGet, userDelete, userPost };

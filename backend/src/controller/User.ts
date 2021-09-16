import { Request, Response } from 'express';
import userGetService from '@/service/User';

const userGet = async (req: Request, res: Response) => {
  const data = await userGetService();

  res.send(data);
};

const userPost = (req: Request, res: Response) => {
  res.send('Code DesgostoWork asd');
};

export { userGet, userPost };

import GeneralApiError from '@/errors/GeneralApiError';
import { Request, Response } from 'express';

const ExceptionHandler = (error: Error | GeneralApiError, req: Request, res: Response): Response => {
  if (error instanceof GeneralApiError) {
    return res.status(error.httpStatusCode).send(error.message);
  }

  return res.status(500).send('Erro inesperado.');
};

export default ExceptionHandler;

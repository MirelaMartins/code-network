import GeneralApiError from '@/errors/GeneralApiError';
import { NextFunction, Request, Response } from 'express';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ExceptionHandler = (error: Error | GeneralApiError, req: Request, res: Response, _: NextFunction): Response => {
  if (error instanceof GeneralApiError) {
    return res.status(error.status).send(error.message);
  }

  return res.status(500).send('Unexpected error.');
};

export default ExceptionHandler;

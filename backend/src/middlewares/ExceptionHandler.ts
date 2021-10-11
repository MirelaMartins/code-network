/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import GeneralApiError from '@/errors/GeneralApiError';
import { NextFunction, Request, Response } from 'express';

const ExceptionHandler = (error: Error | GeneralApiError, req: Request, res: Response, _: NextFunction): Response => {
  if (error instanceof GeneralApiError) {
    return res.status(error.status).send(error.message);
  }
  console.info(`Error name: ${error.name}\nerror message: ${error.message}\nstack: ${error.stack}`);
  return res.status(500).send('Unexpected error.');
};

export default ExceptionHandler;

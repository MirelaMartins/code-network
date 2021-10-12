import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import multer from 'multer';

import ExceptionHandler from './middlewares/ExceptionHandler';
import AuthHandler from './middlewares/Auth';

import AppRoutes from './routes';
import env from './configs/Env';

const app = express();

app.use(express.json());
app.use(cors());

app.use(multer({ dest: `${__dirname}/file/uploads/` }).any());

if (env.where !== 'DEV') app.use(AuthHandler);

app.use('/api/', AppRoutes);

app.use(ExceptionHandler);

export default app;

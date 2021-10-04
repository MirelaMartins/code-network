import express from 'express';
import cors from 'cors';
import ExceptionHandler from './middlewares/ExceptionHandler';
import AppRoutes from './routes';

const app = express();

app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.use('/api/', AppRoutes);

app.use(ExceptionHandler);
export default app;

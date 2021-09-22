import express from 'express';
import ExceptionHandler from './middlewares/ExceptionHandler';
import AppRoutes from './routes';

const app = express();

app.use(express.json());

app.use('/api/', AppRoutes);

app.use(ExceptionHandler);
export default app;

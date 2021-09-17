import express from 'express';
import AppRoutes from './routes';

const app = express();

app.use(express.json());

app.use('/api/', AppRoutes);

export default app;

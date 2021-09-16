import express from 'express';
import AppRoutes from './routes';

const app = express();

app.use('/api/', AppRoutes);

export default app;

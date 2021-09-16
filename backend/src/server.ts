import 'module-alias/register';
import 'dotenv/config';
import app from '@/app';
import env from '@/config/env';
import mongoose from 'mongoose';

try {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  mongoose.connect(env.mongoUri);
  app.listen(env.port, () => {
    console.log(`Server running at: localhost:${env.port}`);
  });
} catch (error) {
  console.log(error);
}

import { sign } from 'jsonwebtoken';
import env from '@/configs/Env';

const generateAuthToken = (name: string, email: string): string => sign({
  name,
  email,
}, env.jwtSecret, { expiresIn: env.jwtExpirationTime });

export default generateAuthToken;

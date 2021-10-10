import env from '@/configs/Env';
import { sign } from 'jsonwebtoken';

const generateAuthToken = (id: string): string => sign({
  id,
}, env.jwtSecret, { expiresIn: env.jwtExpirationTime });

export default generateAuthToken;

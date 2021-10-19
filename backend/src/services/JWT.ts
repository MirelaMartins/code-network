import { sign } from 'jsonwebtoken';
import env from '@/configs/Env';

const generateAuthToken = (id: string): string => sign({
  id,
}, env.jwtSecret, { expiresIn: env.jwtExpirationTime });

export default generateAuthToken;

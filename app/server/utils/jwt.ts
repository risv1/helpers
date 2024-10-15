import jwt from 'jsonwebtoken';
import { jwtSecret } from "../../../env"


export const generateToken = (data: any) => {
  return jwt.sign(data, jwtSecret);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};
import jwt, { Secret } from 'jsonwebtoken';

import { IUser } from './interfaces';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (user: IUser): Secret => {
  const { _id, name, email, isAdmin } = user;

  return jwt.sign(
    {
      _id,
      name,
      email,
      isAdmin,
    },
    JWT_SECRET
  );
};

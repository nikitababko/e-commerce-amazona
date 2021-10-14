import { NextFunction, Request, Response } from 'express';
import jwt, { VerifyOptions, VerifyErrors } from 'jsonwebtoken';

import { IReqAuth, IUser } from '../utils/interfaces';

const isAuth = (req: IReqAuth, res: Response, next: NextFunction) => {
  const bearerToken = req.headers.authorization as any;
  if (!bearerToken) {
    res.status(401).json({
      message: 'Token is not supplied',
    });
  } else {
    const token = bearerToken.slice(7, bearerToken.length);
    const JWT_SECRET = process.env.JWT_SECRET as string;

    jwt.verify(token, JWT_SECRET, (error: any, data: any): void => {
      if (error) {
        res.status(401).json({
          message: 'Invalid token',
        });
      } else {
        req.user = data;
        next();
      }
    });
  }
};

export default isAuth;

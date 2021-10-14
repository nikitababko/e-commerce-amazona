import { Document } from 'mongoose';
import { Secret } from 'jsonwebtoken';
import { Request } from 'express';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  token?: Secret;
}

export interface IReqAuth extends Request {
  user?: IUser;
}

import { Document } from 'mongoose';
import { Secret } from 'jsonwebtoken';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  token?: Secret;
}

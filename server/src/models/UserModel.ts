import { model, Schema } from 'mongoose';

import { IUser } from '../utils/interfaces';

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    index: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default model<IUser>('User', UserSchema);

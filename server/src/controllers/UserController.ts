import { Request, Response } from 'express';

import UserModel from '../models/UserModel';
import { generateToken } from '../utils/generateToken';

class UserController {
  static async createAdmin(req: Request, res: Response) {
    try {
      const user = new UserModel({
        name: 'admin',
        email: 'admin@example.com',
        password: 'asdasd',
        isAdmin: true,
      });

      const createdUser = await user.save();

      res.send(createdUser);
    } catch (error) {
      res.json({
        msg: 'Some error!',
      });
    }
  }

  static async signin(req: Request, res: Response) {
    const { email, password } = req.body;

    const signinUser = await UserModel.findOne({
      email,
      password,
    });

    if (!signinUser) {
      res.status(401).send({
        message: 'Invalid Email or Password',
      });
    } else {
      res.send({
        _id: signinUser._id,
        name: signinUser.name,
        email: signinUser.email,
        isAdmin: signinUser.isAdmin,
        token: generateToken(signinUser),
      });
    }
  }
}

export default UserController;

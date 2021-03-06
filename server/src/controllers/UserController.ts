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
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async signin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const signinUser = await UserModel.findOne({
        email,
        password,
      });

      if (!signinUser) {
        res.status(401).send({
          message: 'Invalid email or password',
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
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const user = new UserModel({
        name,
        email,
        password,
      });

      const createdUser = await user.save();

      if (!createdUser) {
        res.status(401).send({
          message: 'Invalid user data',
        });
      } else {
        res.send({
          _id: createdUser._id,
          name: createdUser.name,
          email: createdUser.email,
          isAdmin: createdUser.isAdmin,
          token: generateToken(createdUser),
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const user = await UserModel.findById(req.params.id);

      if (!user) {
        res.status(404).send({
          message: 'User not found',
        });
      } else {
        const { name, email, password } = req.body;

        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;

        const updatedUser = await user.save();

        res.send({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          isAdmin: updatedUser.isAdmin,
          token: generateToken(updatedUser),
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default UserController;

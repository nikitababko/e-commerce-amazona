import { Request, Response } from 'express';

import UserModel from '../models/UserModel';

class UserController {
  static async createAdmin(req: Request, res: Response) {
    try {
      const user = new UserModel({
        name: 'admin',
        email: 'admin.@example.com',
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
}

export default UserController;

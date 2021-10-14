import express from 'express';

import UserController from '../controllers/UserController';
import { isAuth } from '../middleware';

const router = express.Router();

router.post('/users/createadmin', UserController.createAdmin);

router.post('/users/signin', UserController.signin);

router.post('/users/register', UserController.register);

router.put('/users/:id', isAuth, UserController.update);

export default router;

import express from 'express';

import UserController from '../controllers/UserController';

const router = express.Router();

router.post('/users/createadmin', UserController.createAdmin);

router.post('/users/signin', UserController.signin);

router.post('/users/register', UserController.register);

export default router;

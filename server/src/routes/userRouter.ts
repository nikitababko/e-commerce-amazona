import express from 'express';

import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/users/createadmin', UserController.createAdmin);

export default router;

import express from 'express';

import OrderController from '../controllers/OrderController';
import { isAuth } from '../middleware';

const router = express.Router();

router.post('/orders', isAuth, OrderController.createOrder);
router.get('/orders/mine', isAuth, OrderController.getMineOrder);
router.get('/orders/:id', isAuth, OrderController.getOrder);
router.put('/orders/:id/pay', isAuth, OrderController.updateOrder);

export default router;

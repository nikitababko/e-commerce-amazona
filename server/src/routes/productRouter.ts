import express from 'express';

import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProduct);

export default router;

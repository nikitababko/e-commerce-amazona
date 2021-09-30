import { Request, Response } from 'express';

import { data } from '../data';

class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      res.send(data.products);
    } catch (error) {
      res.json({
        msg: 'Some error!',
      });
    }
  }

  static async getProduct(req: Request, res: Response) {
    try {
      const product: any = data.products.find((x) => x._id === req.params.id);
      if (product) {
        res.send(product);
      } else {
        res.status(404).send({
          message: 'Product not found!',
        });
      }
    } catch (error) {
      res.json({
        msg: 'Some error!',
      });
    }
  }
}

export default ProductController;

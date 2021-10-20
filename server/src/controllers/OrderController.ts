import { Response } from 'express';

import OrderModel from '../models/OrderModel';

class OrderController {
  static async createOrder(req: any, res: Response) {
    try {
      const {
        orderItems,
        shipping,
        payment,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      } = req.body;

      const order = new OrderModel({
        orderItems,
        user: req.user._id,
        shipping,
        payment,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createdOrder = await order.save();

      res.status(201).json({
        message: 'New Order Created',
        order: createdOrder,
      });
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getOrder(req: any, res: Response) {
    try {
      const order = await OrderModel.findById(req.params.id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({
          message: 'Order not found',
        });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async updateOrder(req: any, res: Response) {
    try {
      const order = await OrderModel.findById(req.params.id);
      if (order) {
        order.isPaid = true;
        order.paidAt = Date.now();
        order.payment.paymentResult = {
          payerID: req.body.payerID,
          paymentID: req.body.paymentID,
          orderID: req.body.orderID,
        };
        const updatedOrder = await order.save();
        res.send({ message: 'Order Paid', order: updatedOrder });
      } else {
        res.status(404).send({ message: 'Order Not Found.' });
      }
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async getMineOrder(req: any, res: Response) {
    try {
      console.log('orders');
      const orders = await OrderModel.find({ user: req.user._id });
      console.log(orders);

      res.json(orders);
    } catch (error: any) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }
}

export default OrderController;

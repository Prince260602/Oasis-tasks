// backend/routes/orderRoutes.js
import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

// Create a new order
router.post('/orders', async (req, res) => {
  const { name, address, pizza } = req.body;
  try {
    const newOrder = new Order({ name, address, pizza });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

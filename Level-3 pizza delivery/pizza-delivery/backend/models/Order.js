// backend/models/Order.js
import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  pizza: { type: String, required: true },
  status: { type: String, default: 'Pending' },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;

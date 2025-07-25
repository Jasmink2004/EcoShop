const Order = require('../models/order.model');

exports.getOrders = async (req, res) => {
  const orders = await Order.find().populate('user_id').populate('items.product_id');
  res.json(orders);
};

exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

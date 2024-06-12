const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    order_date: { type: Date, default: Date.now, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

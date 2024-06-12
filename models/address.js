const mongoose = require('mongoose');

// Address Schema
const addressSchema = new mongoose.Schema({
    address_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address_line1: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true }
}, { timestamps: true });

const Address = mongoose.model('Address', addressSchema);

module.exports = Address;

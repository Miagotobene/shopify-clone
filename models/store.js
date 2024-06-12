const mongoose = require('mongoose');

// Store Schema
const storeSchema = new mongoose.Schema({
    store_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
});

const Store = mongoose.model('Store', storeSchema);

module.exports = Store;

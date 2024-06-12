// import modules
const mongoose = require('mongoose');

// create schema
const productSchema = new mongoose.Schema({
    product_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Store', required: true },
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    stock_quantity: { type: Number, required: true},
    image: {type: String, required: true},
    review: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
    createdAt: {
        type: Date,
        default: Date.now
      }
}, { timestamps: true });



// create the model and export it
const Product = mongoose.model('Product', productSchema);

// make this model avaliable for the index file
module.exports = Product;
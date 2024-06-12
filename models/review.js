// import modules
const mongoose = require('mongoose');


// create schema
const reviewSchema = new mongoose.Schema({
    review_id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    rating: {
        type: Number,
        required: true
    },
    comment: { type: String, required: true},
    createdAt: {
        type: Date,
        default: Date.now
      }
}, { timestamps: true });



// create the model and export it
const Review = mongoose.model('Review', reviewSchema);

// make this model avaliable for the index file
module.exports = Review;
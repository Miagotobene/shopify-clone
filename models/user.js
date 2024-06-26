// import modules
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Address = require('address')

// create schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: [true, 'Your phone is required']
    },
    address: { type: String, required: true},
    // address: {type: mongoose.Schema.Types.String, ref: 'Address', required: true},
    role: {type: String, required: true}
}, { timestamps: true });

userSchema.pre('save', function(next) {
    let hash = bcrypt.hashSync(this.password, 12);
    this.password = hash;
    next();
});

// create the model and export it
const User = mongoose.model('User', userSchema);

// make this model avaliable for the index file
module.exports = User;
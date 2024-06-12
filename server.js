require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;
const Store = require('./models/store');
const Order = require('./models/order');
const Product = require('./models/product');


const app = express();
// const flash = require('connect-flash');
// const session = require('express-session');
// const passport = require('./config/passport-config');
// const isLoggedIn = require('./middleware/isLoggedIn');
const SECRET_SESSION = process.env.SECRET_SESSION;
const PORT = process.env.PORT || 3000;



//---------HOME ROUTE-----------//
app.get('/', (req, res) => {
    res.render('home', {});
});


// initialize passport 
// app.use(passport.initialize())
// app.use(passport.session())


//---------MIDDLEWARE-----------//
app.use(express.urlencoded({exended: true}));
app.use(express.json());


//---------OPEN SERVER-----------//
app.listen(PORT, () => {
    console.log(`App's listening on port: ${PORT}`)
})
const express = require('express');
require('dotenv').config();
const connect = require('./config/db');
const app = express();
app.use(express.json());

// mongoose.connect('mongodb://127.0.0.1:27017/nem-101');

//user
const userController = require('./controller/user.controller');
app.use('/user', userController);



//product
const productController = require('./controller/product.controller');
app.use('/product', productController);

//port 
const port = process.env.PORT || 5000;

//connect
app.listen(port, async () => {
  try {
    await connect();
    console.log(`server started at ${port}`);
  } catch (e) {
    console.log(e);
  }
});

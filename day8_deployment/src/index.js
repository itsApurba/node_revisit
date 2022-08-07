const express = require('express');
require('dotenv').config();
const app = express();
const connect = require('./config/db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//user
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);

//product
const productRoute = require('./routes/product.route');
app.use('/product', productRoute);

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`server connected successfully on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});

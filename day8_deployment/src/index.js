const express = require('express');
require('dotenv').config();
const app = express();
const connect = require('./config/db');
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/', (req, res) => {
  const home = () => {
    return(`
    <div>
      <h1>Wellcome to MEARN server</h1>
      <h5>Available routes are</h5>
      <ul>
        <li>/user</li>
        <li>/product</li>
        <li>/todo</li>
      </ul>
    </div>
    `)
  };
  res.send(home());
});

//user
const userRoute = require('./routes/user.route');
app.use('/user', userRoute);

//product
const productRoute = require('./routes/product.route');
app.use('/product', productRoute);

//todo
const todoctRoute = require('./routes/todo.route');
app.use('/todo', todoctRoute);

const port = process.env.PORT || 8000;
app.listen(port, async () => {
  try {
    await connect();
    console.log(`server connected successfully on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});

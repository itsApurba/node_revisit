const express = require('express');

const app = express();
app.use(express.json());

// const fs = require("fs");
// const product = fs.readFileSync(`${__dirname}/product.json`,{encoding: "utf-8"} )
// data = JSON.parse(product);
// console.log('data: ', data);

const prodController = require('./controller/product.controller');
app.use('/product', prodController);


// const userController = require('./controller/user.controller');
// app.use('/user', userController);



app.get('/', (req, res) => {
  res.send('hello from home route');
});

app.listen(8080, () => {
  console.log('express server started on port 8080');
});



// const level = require('level');
// const sublevel = require('level-sublevel');

// const db = level('./db', {valueEncoding: 'json'});




// const express = require('express');

// const app = express();
// app.use(express.json());

// const fs = require("fs");
// const product = fs.readFileSync(`${__dirname}/product.json`,{encoding: "utf-8"} )
// data = JSON.parse(product);
// console.log('data: ', data);

// const prodController = require('./controller/product.controller');
// app.use('/product', prodController);

// const userController = require('./controller/user.controller');
// app.use('/user', userController);

// app.get('/', (req, res) => {
//   res.send('hello from home route');
// });

// app.listen(8080, () => {
//   console.log('express server started on port 8080');
// });

// const level = require('level');
// const sublevel = require('level-sublevel');

// const db = level('./db', {valueEncoding: 'json'});

//
const express = require('express');
const app = express();
app.use(express.json());

//
const fs = require('fs');
const path = require('path');

const dbfile = fs.readFileSync(`${__dirname}/../db.json`, {
  encoding: 'utf-8',
});
const db = JSON.parse(dbfile);
let products = db.products;

const updateDB = (updatedData) => {
  fs.writeFileSync(`${__dirname}/../db.json`, JSON.stringify(updatedData), {
    encoding: 'utf-8',
  });
};
// let products = [
//   { id: 1, name: 'P1', price: 200 },
//   { id: 15, name: 'P5', price: 900 },
//   { id: 41, name: 'P8', price: 400 },
//   { id: 16, name: 'P9', price: 700 },
//   { id: 21, name: 'P7', price: 800 },
//   { id: 91, name: 'P4', price: 100 },
// ];

//Home Route
app.get('/', (req, res) => {
  res.send('Home Route');
});

//Get Products
app.get('/product', (req, res) => {
  res.send(JSON.stringify(products));
});

//Get Product by ID
app.get('/product/:id', (req, res) => {
  const findOne = products.find((p) => p.id === parseInt(req.params.id));
  if (!findOne) {
    res.status(404).send('not found');
  }
  res.status(202).send(findOne);
});
//Post a Product
app.post('/product', (req, res) => {
  products.push(req.body);
  res.send(products);
});
//Patch a Product
app.patch('/product/:id', (req, res) => {
  products = products.map((p) => {
    if (p.id === parseInt(req.params.id)) {
      return { ...p, ...req.body };
    } else return p;
  });
  res.status(202).send(products);
});
//Delete Product
app.delete('/product/:id', (req, res) => {
  const ind = products.findIndex((p) => p.id === parseInt(req.params.id));
  products.splice(ind, 1);
  res.send(products);
});
//Page Not Found
app.get('*', (req, res) => {
  res.send('not found');
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});


//benchmarking
//autocannon
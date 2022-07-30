const express = require('express');

const router = express.Router();

const fs = require('fs');
const product = fs.readFileSync(`${__dirname}/product.json`, {
  encoding: 'utf-8',
});
data = JSON.parse(product);

router.get('/', (req, res) => {
  let { id, name, price } = req.query;
  let prod = data.filter((p) => {
    if (id) {
      return p.id === parseInt(id);
    }
    if (name) {
      return p.name === name;
    }
    if (price) {
      return p.price >= parseInt(price);
    }
    return false;
  });

  res.send(prod);
});

router.get('/:id', (req, res) => {
  let { id } = req.params;
  let prodid = parseInt(id);
  let prod = data.find((p) => p.id === prodid);
  res.send(prod);
});

router.post('/', (req, res) => {
  console.log(req.body);
  data.push(req.body);
  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(data),  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.send(data);
});

router.delete('/:id', (req, res) => {
  let { id } = req.params;
  
  let remainingProd = data.filter((p) => p.id != parseInt(id));
  
  fs.writeFile(`${__dirname}/product.json`, JSON.stringify(remainingProd),  (err) => {
    if (err) throw err;
    console.log('The file has been deleted!');
  });
  res.status(202).send(remainingProd);
});


module.exports = router;

const express = require('express');
const Product = require('../model/product.model');

const productRoute = express.Router();

productRoute.get('/', async (req, res) => {
  try {
    const product = await Product.find().lean().exec();
    return res.send(product);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

productRoute.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.send(product);
  } catch (e) {
    return res.status(500).send(e);
  }
});

productRoute.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send('product created successfully');
  } catch (e) {
    return res.status(500).send(e);
  }
});

productRoute.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.send(product);
  } catch (e) {
    return res.status(500).send();
  }
});

productRoute.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    return res.send('user deleted successfully');
  } catch (e) {
    return res.status(500).send(e);
  }
});

module.exports = productRoute;

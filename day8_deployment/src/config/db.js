const mongoose = require('mongoose');
require('dotenv').config();
const url = process.env.MONGOURI;
module.exports = () => {
  return mongoose.connect(url);
};

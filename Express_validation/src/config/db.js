const mongoose = require('mongoose');

module.exports = () => {
  return mongoose.connect(
    'mongodb+srv://testingdb:testingdb@cluster0.mbsvtve.mongodb.net/?retryWrites=true&w=majority'
  );
};

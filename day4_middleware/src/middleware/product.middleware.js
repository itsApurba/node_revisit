module.exports = productMiddelware = (req, res, next) => {
  console.log('productMiddelware: ');
  next();
};

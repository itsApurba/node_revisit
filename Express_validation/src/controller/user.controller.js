const { Router } = require('express');
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const userRoute = Router();

//
//
userRoute.get('/', async (req, res) => {
  try {
    const user = await User.findById().lean().exec();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
//
//
userRoute.post(
  '/',
  body('id').isNumeric().withMessage('is is not a number'),
  body('first_name')
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage('first name must be from 8 to 20 chars'),
  body('last_name')
    .isString()
    .isLength({ min: 3, max: 20 })
    .withMessage('first name must be from 8 to 20 chars'),
  body('dob').isDate(),
  body('gender').isString(),
  body('email')
    .isEmail()
    .withMessage('Incorrect Email')
    .bail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });
      if (user) {
        throw new Error('E-mail already in use');
      }
      return true;
    }),
  body('password')
    .isLength({ min: 8 })
    .withMessage('password must be between 8 to 12 chars.')
    .bail()
    .custom(async (value) => {
      const ckeckPass =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
      if (ckeckPass.test(value)) {
        return true;
      }
      throw new Error('Password is not Strong');
    }),
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        let newErrors = errors.array().map((err) => {
          return { key: err.param, message: err.msg };
        });
        return res.status(400).json({ errors: newErrors });
      }

      // const user = await User.create(req.body);
      res.send('user');
    } catch (err) {
      res.status(500).send(err);
    }
  }
);
module.exports = userRoute;

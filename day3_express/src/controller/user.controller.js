const express = require('express');

const router = express.Router();

const fs = require('fs');
const users = fs.readFileSync(`${__dirname}/user.json`, {
  encoding: 'utf-8',
});
data = JSON.parse(product);

router.get('/', (req, res) => {
  res.send(data);
});

router.get('/:id', (req, res) => {
  const user = data.find((u) => u.id == parseInt(req.params.id));

  res.send(user);
});

router.post('/', (req, res) => {

  console.log('req.body: ', req.body);
  data.push(req.body);
  fs.write(`${__dirname}/user.json`, JSON.stringify(data), () => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.send(data);
});

router.delete('/', (req, res) => {
  const remainingUsers = data.filter((u) => u.id != parseInt(req.params.id));
  fs.writeFile(`${__dirname}/user.json`, JSON.stringify(remainingUsers), () => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.send(remainingUsers);
});

module.exports = router;

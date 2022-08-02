const express = require('express');
const compression = require('compression');
var cors = require('cors');
const app = express();

//middleware
app.use(express.json());
app.use(compression());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  })
);
app.use(express.urlencoded({extended:true}))

const authMiddleware = (req, res, next) => {
  console.log('logger1');
  // console.log(req.headers['token']);
  if (req.url != '/') {
    return res.send('404');
  }
  next();
};

const loggerMiddleware = (req, res, next) => {
  //   console.log(req.method, req.url);
  console.log('logger2');
  res.on('finish', () => {
    console.log('request completed succesfully');
  });
  //   res.on('close', ()=>{
  //      console.log('request completed succesfully');
  //   })
  next();
};

const timerMiddlewarev = (req, res, next) => {
  console.time('t1');
  res.on('finish', () => {
    console.timeEnd('t1');
  });
  next();
};

app.use('/', (req, res) => {

     console.log(req.query);
     res.send(req.query);
});
// app.use(authMiddleware);
// app.use(loggerMiddleware);
// app.use(timerMiddlewarev);

// app.get('/', (req, res) => {
//   setTimeout(() => {
//     console.log('/ setTimeout');
//     res.send('/route');
//   }, 4000);
// });

const productMiddelware = require('./middleware/product.middleware');
const prodController = require('./controller/product.controller');
app.use('/product', productMiddelware, prodController);

app.listen(8080, () => {
  console.log('server started');
});



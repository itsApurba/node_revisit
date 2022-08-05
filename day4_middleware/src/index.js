const express = require('express');
const compression = require('compression');
var cors = require('cors');
const path = require('path');
const app = express();

//middleware
// app.use(express.json());
// app.use(compression());
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
  })
);

// app.use(express.urlencoded({ extended: true }));

// const authMiddleware = (req, res, next) => {
//   console.log('logger1');
//   // console.log(req.headers['token']);
//   if (req.url != '/') {
//     return res.send('404');
//   }
//   next();
// };

// const loggerMiddleware = (req, res, next) => {
//   //   console.log(req.method, req.url);
//   console.log('logger2');
//   res.on('finish', () => {
//     console.log('request completed succesfully');
//   });
//   //   res.on('close', ()=>{
//   //      console.log('request completed succesfully');
//   //   })
//   next();
// };

// const timerMiddlewarev = (req, res, next) => {
//   console.time('t1');
//   res.on('finish', () => {
//     console.timeEnd('t1');
//   });
//   next();
// };

// app.use('/', authMiddleware, (req, res) => {

//   console.log(req.query);
//   res.send(req.query);
// });
// app.use(authMiddleware);
// app.use(loggerMiddleware);
// app.use(timerMiddlewarev);

// app.get('/', (req, res) => {
// //   setTimeout(() => {
// //     console.log('/ setTimeout');
// //     res.send('/route');
// //   }, 4000);
// });

// const productMiddelware = require('./middleware/product.middleware');
// const prodController = require('./controller/product.controller');
// app.use('/product', productMiddelware, prodController);

// var morgan = require('morgan');
// morgan.token('type', function (req, res) {
//   return req.headers['content-type'];
// });
// morgan.token('id', function getId(req) {
//   return req.id;
// });
// app.use(
//   morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'),
//       '-',
//       tokens['response-time'](req, res),
//       'ms',
//       tokens['date'](req, res),
//       tokens['http-version'](req, res),
//       // tokens['id'](req, res),
//       // tokens['token'](req, res),
//     ].join(' ');
//   })
// );

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//file upload

const multer = require('multer');

const fileStorageEngine = multer.diskStorage({
  destination: (res, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

app.post('/single', upload.single('avatar'), function (req, res) {
  // req.file is the `avatar` file
  console.log('req.file : ', req.file);
  // req.body will hold the text fields, if there were any
  res.send('file uploaded succesfully');
});

app.post('/multiple', upload.array('avatars', 3), (req, res) => {
  console.log('req.files : ', req.files);

  res.send('multiple files uploaded succesfully');
});

app.listen(8080, () => {
  console.log('server started');
});

const http = require('http');
const fs = require('fs');

const pageNotFound = fs.readFileSync(`${__dirname}/notfound.html`, {
  encoding: 'utf-8',
});
const product = require('./product.json');

// let dataout;

// let content = fs.readFileSync(`${__dirname}/text.txt`, {encoding : 'utf-8'}, (err, data)=>{
//      if(err) throw err
//  })
// console.log('content: ', content);

// console.log('product: ', product);
//create server
// const server1 = http.createServer((req, res) => {
//   console.log('req: ', req.url);
//   let message = 'Welcome to ';
//   // res.hasHeader("content-type", "text/html")
//   if (req.url === '/login') {
//     message += 'Login Page';
//     //     res.write('welcome');
//   } else if (req.url === '/logout') {
//     message += 'Logout Page';
//     //     res.write('goodbye');
//   } else if (req.url === '/product') {
//      product.forEach((e)=>{
//           res.write();
//      })

//   } else if (req.url === '/web') {
//     res.write('<h1>hello i am a h1 tag</h1>');
//   } else if (req.url === '/') {
//     res.write('Hello from Home Page');
//   } else {
//     res.writeHead(404, {});
//     res.write(
//       'Hmm...this page doesn’t exist. Try searching for something else.'
//     );
//   }
//   res.write(`<h1>${message}</h1>`);

//   res.end();
// });

const homePage = fs.readFileSync(`${__dirname}/index.html`, {
  encoding: 'utf-8',
});
// console.log('homePage: ', homePage);

const server = http.createServer((req, res) => {
  // console.log('req: ', req.url);
  let message = 'Welcome to ';

  switch (req.url) {
    case '/': {
      console.time("t1")
      res.setHeader('content-type', 'text/html');
      res.write(homePage);
      console.timeEnd("t1")
      break;
    }
    case '/public': {
      res.write('public route');
      break;
    }

    case '/product': {
      res.setHeader('content-type', 'text/json');
      message += 'Product Page';
      res.write(`<h1>${message}</h1>`);
      product.posts.forEach((e) => {
        res.write(
          `<ul>
               <li>${e.id}</li>
               <li>${e.author}</li>
          </ul>`
        );
      });
      break;
    }
    case '/test': {
      res.write(__dirname);
      fs.readdir('../day2_httpserver', (err, files) => {
        files.forEach((file) => {
          console.log('file: ', file);
          res.write(file);
        });
      });
      break;
    }
    default: {
      res.write(pageNotFound);
    }
  }

  res.end();
});
//start server
server.listen(8080, () => {
  console.log('starting server on 8080');
});
// console.log("http server");

// console.log('1');
// console.log('2');

// console.log('4');
// setImmediate(()=> console.log('5') )
// setTimeout(()=>{
//      console.log('3');
// }, 0);
// console.log('6');

//whenever the process.next gets empty, the immediate callback is executed

// console.time("t1");
// //operation
// console.timeEnd("t1");

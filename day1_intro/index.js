// const { sum, sub, mul } = require('./test');
const isEven = require('is-even');
const os = require('os');
const path = require('path');
const fs = require('fs');

// console.log('mul: ', mul(2, 4));
// console.log('sub: ', sub(3, 2));
// console.log('sum: ', sum(3, 5));

// console.log(isEven(6));

// console.log(os.cpus());

// console.log('path: ', path);
// console.log(__dirname);
// console.log(__filename);

// console.warn("Warn");
// console.error("Error");

// console.log("before");
// const content = fs.readFileSync("./test.js", {encoding : "utf-8"});
// console.log('content: ', content);
// console.log("after");

//bydefault it is asyncronous
// console.log('before');
// const content = fs.readFile('./test.js', { encoding: 'utf-8' }, (err, data) => {
//   console.log('data: ', data);
// });
// console.log('after');



//keywords
//exports
//require
//module
//__direname
//__filename


//crypto hashing
// const crypto = require('crypto');
// const secret = 'password';
// const hash = crypto
//   .createHmac('sha256', secret)
//   .update('welcome to crypto')
//   .digest('hex');
// console.log('hash: ', hash);
//password + SALT
//one way direction


// readline module to take input from user
// const readline = require('readline');
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// reader.question('please enter you name: ', (name) => {
//   console.log(`Hello ${name}`);
//   reader.close();
// });


// npm install inquire
// const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?",
//   },
// ];

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers.name}!`);
// });




// console.log(process.argv);

let fun = process.argv[2];
let arg1 = +process.argv[3];
let arg2 = +process.argv[4];

const add = (a, b) => a + b;
const sub = (a, b) => Math.abs(a - b);


if (fun == 'add') {
  let res = add(arg1, arg2);
  console.log('res: ', res);
} else if (fun == 'sub') {
  let res = sub(arg1, arg2);
  console.log('res: ', res);
}




// Random Number by crypto
// const crypto = require('crypto');

// const inputstr = process.argv[2];
// if (inputstr == 'random') {
//   const n = crypto.randomInt(11);
//   console.log(`Random number chosen from (0, 1, 2): ${n}`);
// }



// With `min` argument
// const { randomInt } = require('crypto');

// const n = randomInt(1, 7);
// console.log(`The dice rolled: ${n}`);





// fs.open('test.txt', 'w', function (err, file) {
//      if (err) throw err;
//      console.log('Saved!');
// });// create


// const content = fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
//      console.log('data: ', data);
// }); //read


// fs.writeFileSync("./new.txt", "random text");// to write
// fs.appendFileSync('./test.txt', 'data to append');// append

// fs.unlinkSync("./new.txt"); // to remove


// fs.rename('./test.txt', './newtest.txt', (err) => {
//   if (err) throw err;
//   console.log('Rename complete!');
// });//rename


// fs.readdir("../day1_intro", (err, files) => {
//      files.forEach(file => {
//           console.log(file);
//      });
// });


// fs.readdirSync(directory).forEach(file => {
//      if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
//           console.log('Directory: ' + file);
//      } else {
//           console.log('File: ' + file);
//      }
// });

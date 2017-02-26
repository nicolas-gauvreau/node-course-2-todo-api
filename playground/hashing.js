const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });

// var hashed = '$2a$10$6TA41/Dj/9HSmmvgVxwJIOyGd4xHVWorcmQstT9qL8rJlCecBdG3m';
// bcrypt.compare(password, hashed, (err, res) => {
//   console.log(res);
// });

var data = {
  id: 10
};

var token = jwt.sign(data, process.env.JWT_SECRET);
var decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log({token, decoded});

var message = "I am user number 3";
var hash = SHA256(message).toString();

console.log({
  message, hash
});
//
// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + proces.env.JWT_SECRET).toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed.');
// } else {
//   console.log('Data was changed. Do not trust!');
// }

const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58ac96b1bab6f17819f8758b11';

var userId = '58ac656908ae613010b0fd10';

// if (!ObjectID.isValid(id)) {
//   console.log(`Id ${id} is not valid.`);
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found.');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => {
//   console.log(e);
// });

if (ObjectID.isValid(userId)) {
  User.findById(userId).then((user) => {
    if (!user) {
      return console.log(`No user with id ${userId}.`)
    }
    console.log('User by id', user);
  }, (e) => {
    return console.log('Could not retrieve the user', e)
  });
} else {
  console.log(`The specified user id ${userId} is not a valid id.`);
}

const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ab36c2d9ee94e0bbcee1a8b';

// if(!ObjectID.isValid(id)) {
//   console.log('Id not Valid');
// }

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found!');
//   }
//   console.log('Todo By find by Id', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));

// Todo.find({
//   _id: id
// }).then((todos) => { // not a single document
//   console.log('Todos find', JSON.stringify(todos, undefined, 2));
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => { // single document
//   console.log('Todo By findOne', JSON.stringify(todo, undefined, 2));
// });

User.findById('5ab227d24251762d306478cd').then((user) => {
  if(!user) return console.log('Unable to find User');
  console.log('User Details');
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
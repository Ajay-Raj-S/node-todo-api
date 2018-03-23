const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// TOdo.remove({})

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: 'ab464de3edc679a14e21efb'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5ab464de3edc679a14e21efb').then((todo) => {
  console.log(todo);
})
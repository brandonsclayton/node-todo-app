
const { ObjectID } = require('mongodb');

const { mongoose } = require('../server/db/mongoose');
const { Todo } =require('../server/models/todo');

let id = '5c3e16633aa429841cde3981';

if (!ObjectID.isValid(id)) {
  return console.log(`ID [${id}] not valid`);
}

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log(todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log(todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log(`Id [${id}] not found`);
  }

  console.log(todo);
}).catch((err) => console.log(err));
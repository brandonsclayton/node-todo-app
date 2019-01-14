
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5c3cf412b662ac26a59fe1a4')
  // }).toArray()
  // .then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch((err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  // db.collection('Todos').find().count()
  // .then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }).catch((err) => {
  //   console.log('Unable to fetch todos', err);
  // })

  db.collection('Users').find({name: 'Brandon'}).toArray()
  .then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }).catch((err) => {
    console.log('Undable to find', err);
  });

  // db.close();
});

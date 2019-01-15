
require('./config/config');

let express = require('express');
let bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');
const _ = require('lodash');

let { mongoose } = require('./db/mongoose');
let { Todo } = require('./models/todo');
let { User } =  require('./models/user');

let app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text,
  })

  todo.save().then((doc) => {
    res.send(doc);
  }).catch((err) => {
    res.status(400).send(err);
  });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  let body = _.pick(req.body, ['email', 'password']);
  console.log(body);

  let user = new User(body);

  user.save().then((doc) => {
    res.send(doc);
  }).catch((err) => res.status(400).send(err));
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }).catch((err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req, res) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send(`ID [${id}] not valid`);
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('Todo not found');
    }

    res.send({ todo });
  }).catch((err) => res.status(400).send('Unable to fetch todo'));
});



app.listen(port, () => {
  console.log(`Listening on port ${port} ...`);
});

module.exports = { app };
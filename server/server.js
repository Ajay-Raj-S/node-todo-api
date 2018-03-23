// Library Imports
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

// Local Imports
const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// POST API endpoint
app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save(todo).then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET API endpoint
app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (err) => {
    res.status(400).send(err);
  });
});

// GET /todos/:id
app.get('/todos/:id', (req, res) => {
  var id = req.params.id;
  // valid id using isValid
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // quering database
  Todo.findById(id).then((todo) => {
    if(!todo) {
      res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((err) => {
    res.status(400).send();
  });
});

// deleting the todos
app.delete('/todos/:id', (req,res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove({_id: id}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

// Updating the todos
app.patch('/todos/:id', (req,res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text','completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) return res.status(404).send();

    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = {app};
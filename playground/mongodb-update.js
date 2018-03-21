// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) return 'unable to connect to the mongo database';
	console.log('connected to mongoDB Server');

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ab1379f0950e664ff622f20')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('users').findOneAndUpdate({
    name: 'raj'
  }, {
    $set: {
      name: 'James Bond'
    }, $inc: {
      age: 15
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

});
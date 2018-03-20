// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) return 'unable to connect to the mongo database';
	console.log('connected to mongoDB Server');

	const db = client.db('TodoApp');

  // access the collections documents === READ
  // db.collection('Todos').find({
  //   _id: new ObjectID('5ab0dfb26c6d9224186bb105')
  // }).toArray().then((docs) => {
  //   console.log('Todos :');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // To count the collection documents
  // db.collection('Todos').find().count().then((count) => {
  //   console.log('Todos Count: ' + count);
  //   console.log(JSON.stringify(count, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // To check for my name
  db.collection('users').find({
    name: 'ajay'
  })
  .toArray()
  .then((docs) => {
    console.log('Users : ');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch data from the user collection ' + err);
  });

	// client.close();
});
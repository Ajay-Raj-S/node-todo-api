// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) return 'unable to connect to the mongo database';
	console.log('connected to mongoDB Server');

	const db = client.db('TodoApp');
	// creating collections and inserting one document
	// db.collection('Todos').insertOne({
	// 	test: 'Something to do',
		// completed: false
	// }, (err,result) => {
	// 	if(err) return console.log('Unable to insert todo', err);
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	// db.collection('users').insertOne({
	// 	name: 'alan walker',
	// 	age: 20,
	// 	location: 'Norway'
	// }, (err, result) => {
  //   if(err) return console.log('Unable to insert document');
  //   //console.log(result);
  //   console.log(result.ops[0]._id.getTimestamp());
	// });

	client.close();
});
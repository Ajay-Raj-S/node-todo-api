// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) return 'unable to connect to the mongo database';
	console.log('connected to mongoDB Server');

  const db = client.db('TodoApp');

  // deleteMany
  /*  db.collection('Todos').deleteMany({text: 'Eat Dinner'}).then((docs) => {
      console.log(docs);
    });
  */
  // deleteOne
  /*  db.collection('Todos').deleteOne({text: 'Eat breakfast'}).then((docs) => {
      console.log(docs);
    });
  */
  // findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((res) => {
      console.log(res);
    });
  // client.close();

});
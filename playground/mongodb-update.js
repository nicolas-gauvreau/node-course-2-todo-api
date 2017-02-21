const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection("Todos").findOneAndUpdate(
  //   {
  //      _id: new ObjectID("58ac59ee7df0151a32e2799b")
  //    }, {
  //      $set: {
  //        completed: true
  //      }
  //    }, {
  //      returnOriginal: false
  //    }).then((result) => {
  //      console.log(JSON.stringify(result, undefined, 2));
  //    });

   db.collection("Users").findOneAndUpdate(
     {
        _id: new ObjectID("58ab55080dc4ee18808be0c6")
      }, {
        $set: {
          name: 'Nicolas'
        },
        $inc: {
          age: 3
        }
      }, {
        returnOriginal: false
      }).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
      });

  // db.close();
});

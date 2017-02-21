const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.');

  // db.collection("Todos").deleteMany({ text: "Eat lunch" }).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Todos").deleteOne({ text: "Eat lunch" }).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // })

  // db.collection("Users").deleteMany({ name: "Nicolas" }).then((result) => {
  //   console.log(result);
  // });

  db.collection("Users").findOneAndDelete({_id: new ObjectID("58ab54ed57586e1a88626b26")}).then((result) => {
    console.log(result);
  })

  // db.close();
});

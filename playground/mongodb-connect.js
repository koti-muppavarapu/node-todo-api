const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to Mongo DB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({text: 'Something to do', completed: false}, (err, result) => {
    //     if (err){
    //         return console.log('Failed to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({name: 'Koti', age: "33", location: "Johannesburg"}, (err, result) => {
    //     if (err){
    //         return console.log('Failed to insert User', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});
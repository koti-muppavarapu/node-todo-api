const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to Mongo DB Server');
    const db = client.db('TodoApp');

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5aba32a23a89782e0cceacce")}, {$set: {completed: true}}, {returnOriginal: false}).then((result) => {
        console.log('Update User');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to update User', err);
    });

    db.collection('Users').findOneAndUpdate({_id: new ObjectID("5aba32a23a89782e0cceacce")}, {$set: {name: "Koti"}, $inc: {age: 2}}, {returnOriginal: false}).then((result) => {
        console.log('Update User');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to update User', err);
    });

    client.close();
});
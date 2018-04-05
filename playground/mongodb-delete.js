const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to Mongo DB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log('Delete Todos');
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log('Delete Todos');
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log('Delete Todos');
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to delete Todos', err);
    // });

    db.collection('Users').deleteMany({name: 'Koti'}).then((result) => {
        console.log('Delete Users');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to delete Users', err);
    });

    db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
        console.log('Delete User');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        console.log('Unable to delete User', err);
    });

    client.close();
});
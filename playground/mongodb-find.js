const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err){
        return console.log('Unable to connect to Mongo DB Server');
    }
    console.log('Connected to Mongo DB Server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({_id: new ObjectID('5aba314104ea212e9ccd9733')}).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to find Todos', err);
    // });

    // db.collection('Todos').find({}).count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to find Todos', err);
    // });

    db.collection('Users').find({name: 'Koti'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to find Users', err);
    });

    db.collection('Users').find({name:'Koti'}).count().then((count) => {
        console.log('Users');
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to find Users', err);
    });

    client.close();
});
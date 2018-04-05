const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5ac3d1a34a78db11403ad6ad';
var userId = '5ac3697fdcf89f3994c27965';

if (!ObjectID.isValid(id)){
    return console.log("Id not valid");
}

if (!ObjectID.isValid(userId)){
    return console.log("User Id not valid");
}

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}).catch((e) => console.log(e));

Todo.findOne({
    _id: id
}).then((todo) => {
    if (!todo){
        return console.log("Id not found");
    }
    console.log('Todo', todo);
}).catch((e) => console.log(e));

Todo.findById(id).then((todo) => {
    if (!todo){
        return console.log("Id not found");
    }
    console.log('Todo By Id', todo);
}).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if (!user){
        return console.log("User Id not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}).catch((e) => console.log(e));
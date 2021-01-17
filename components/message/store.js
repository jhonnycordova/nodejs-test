
const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

db.connect("mongodb+srv://jhonnycordova:.Jho2021@cluster0.eu6jb.mongodb.net/backend_node_test_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('DB connected'))
.catch((err) => {
    console.log(err);
});

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages() {
    return await Model.find();
}

async function updateText(id, message) {
    const foundMessage = await Model.findById(id);

    foundMessage.message = message;

    const newMessage = await foundMessage.save();

    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText
}
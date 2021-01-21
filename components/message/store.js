
const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = {user: filterUser};
    }
    
    return await Model.find(filter);
}

async function updateText(id, message) {
    const foundMessage = await Model.findById(id);

    foundMessage.message = message;

    const newMessage = await foundMessage.save();

    return newMessage;
}

async function removeMessage(id) {
    return await Model.deleteOne({_id: id});
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
}
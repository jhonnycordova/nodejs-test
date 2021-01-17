const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject('Faltan datos en el mensaje');
            return;
        }

        const fullMessage = {
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage);
        
        resolve(fullMessage);
    });
}

function getMessages()
{
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

function updateMessage(id, message)
{
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('Invalid Data');
            return false;
        }

        const res = await store.updateText(id, message);
        resolve(res);
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage
}
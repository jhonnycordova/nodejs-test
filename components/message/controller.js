const store = require('./store');
const { socket } = require('../../socket');

function addMessage(chat, user, message, file) {
    return new Promise((resolve, reject) => {
        if (!chat || !user || !message) {
            reject('Faltan datos en el mensaje');
            return;
        }

        let fileUrl = null;
        if (file) {
            fileUrl = 'http://localhost:3010/app/files/' + file.filename;
        }

        const fullMessage = {
            chat,
            user,
            message,
            date: new Date(),
            file: fileUrl
        }

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);
        
        resolve(fullMessage);
    });
}

function getMessages(filterUser)
{
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser));
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

function deleteMessage(id)
{
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid ID');
            return false;
        }
        store.remove(id).then(() => {
            resolve();
        }).catch(e => {
            reject(e);
        })
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}

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
        
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage
}
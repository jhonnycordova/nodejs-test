const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://jhonnycordova:.Jho2021@cluster0.eu6jb.mongodb.net/backend_node_test_db?retryWrites=true&w=majority',
    port: process.env.PORT || 3010,
    host: process.env.HOST || 'http://localhost'
};

module.exports = config;
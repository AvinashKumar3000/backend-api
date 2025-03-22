const mongoose = require('mongoose'); // ODM -> Object Data Modelling

function connect() {
    mongoose.connect('mongodb://localhost:27017/temp-db');

    mongoose.connection.on('connected', () => {
        console.log("Mongoose is connected!!!");
    });

    mongoose.connection.on('error', (err) => {
        console.log("Mongoose is connected!!!", err);
    });
}

module.exports = connect;

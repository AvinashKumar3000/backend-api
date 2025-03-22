const { required } = require('joi');
const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
})

const userSchema = new mongoose.Schema({ 
    name: {
        type: NameSchema,
        required: true,
    },
    role: {
        type: String,
        unique: true,
        index: true,
        enum: ['admin', 'user'],
    },
    age: {
        type: Number, 
        min: 18,
        max: 100,
        enum: [18, 19, 20, 21, 22, 23, 24, 25],
    }
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;
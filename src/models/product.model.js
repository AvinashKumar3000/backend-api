const { Schema } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const ProductModel = mongoose.model('Product',productSchema);
module.exports = ProductModel;
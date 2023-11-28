const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    authors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Author',
        },
    ],
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'Publisher',
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review',
        },
    ],
    price: {
        type: Number,
        required: true,
    },
    cover: {
        type: String,
        required: false,
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    quantity: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

module.exports = mongoose.model('Book', bookSchema);

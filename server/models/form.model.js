const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: { type: String,
    required: [true, 'Title is required'],
    minLength: [3, 'The title must be 3 or more characters'],
    maxLength: [50, 'The title is too long']
    },
    price: { type: Number,
        required: [true, 'Price is required'],
        minLength: [1, 'The price is too low'],
        maxLength: [50, 'The price is too high']
    },
    description: { type: String,
    required: [true, 'Description is required'],
    minLength: [3, 'The description must be 3 or more characters'],
    maxLength: [100, 'The description is too long']}
}, { timestamps: true})
module.exports = mongoose.model('Product', ProductSchema)
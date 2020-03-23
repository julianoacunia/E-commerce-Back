const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema (
    {
        _id: {
            type: Number,
            require: true
        },
        tittle: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        availableSize: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        photo: {
            type: String,
            require: true
        }
    },
    {versionKey: false}
)

const Product = mongoose.model('products', ProductSchema)

module.exports = Product
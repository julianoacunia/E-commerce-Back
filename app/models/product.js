const mongoose = require('moongose')
const Schema = moongose.Schema

const ProductSchema = new Schema (
    {
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

const Product = mongoose.model('product', ProductSchema)

module.exports = Product
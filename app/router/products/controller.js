const Product = require('../../models/product')

const getAll = (req, res) => {
    Product.find({},(err, products) => {
        if (err) res.send({ msg: 'can`t get the user list', error: err })
        res.send(products)
    })
}

const getById = (req, res) => {
    Product.findById(req.params.id, (err, products) => {
        if (err)
        res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
        res.send(products)
    })
}
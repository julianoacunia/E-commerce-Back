const Product = require('../../models/product')

// Get all product method
const getAll = (req, res) => {
    Product.find({},(err, products) => {
        if (err) res.send({ msg: 'can`t get the user list', error: err })
        res.send(products)
    })
}

// Get id product method
const getById = (req, res) => {
    Product.findById(req.params.id, (err, products) => {
        if (err)
        res.send({ msg: `Cant't get the product ${req.params.id}`, error: err })
        res.send(products)
    })
}

// Insert product method
const insertProduct = (req, res) => {
    const product = new Product ({
        tittle: req.body.tittle,
        description: req.body.description,
        availableSize: req.body.availableSize,
        price: req.body.price,
        photo: req.body.photo
    })
    product.save(err => {
        if (err) res.send({ msg: 'Cant`t save the product', error: err })
        res.send({ msg: 'product saved', data: product })
    })
}

// Upsert product method 
const upsertProduct = (req, res) => {
    Product.updateOne({ _id: req.params.id  }, { ...req.body }, err => {
        if (err)
        res.send({
          msg: `Cant't upsert the product ${req.params.id}`,
          error: err
        })
        res.send({ msg: 'Product upserted' })
    })
}

// Remove product method
const removeProduct = (req, res) => {
    Product.findOneAndDelete({ _id: req.params.id } ,(err, doc) => {
        if (err) return res.status(500).send(err)
        res.status(200).send(doc)
    })
}


module.exports = {
    getAll,
    getById,
    insertProduct,
    upsertProduct,
    removeProduct
}
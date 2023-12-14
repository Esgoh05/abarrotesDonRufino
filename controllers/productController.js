const ModelProducts = require('../models/Products')

const createProduct = (req, res) => {
    ModelProducts.create(req.body)
    .then(row => {
        res.status(201).send(row)
    })
    .catch(err => {
        res.status(400).send(err.message)
    })
}

const findOneProduct = (req, res) => {
    ModelProducts.findOneProduct(req.params.idProduct)
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(404).send(err.message)
        })
}

const findAllProducts = (req, res) => {
    ModelProducts.findAllProducts()
        .then(row => {
            res.status(200).send(row)
        })
        .catch(err => {
            res.status(404).send(err.message)
        })
}

module.exports = {
    createProduct,
    findOneProduct,
    findAllProducts
}
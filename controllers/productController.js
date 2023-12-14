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

const updateOneProduct = (req, res) => {
    ModelProducts.updateProduct(req.params.idProduct, req.body)
    .then(row => {
        res.status(200).send(row)
    })
    .catch(err => {
        res.status(404).send(err.message)
    })
}

const costUpdateProduct = (req, res) => {
    ModelProducts.costUpdateProduct(req.params.idProduct, req.cost)
    .then(row => {
        res.status(200).send(row)
    })
    .catch(err => {
        res.status(400).send(err.message)
    })
}

const destroyProduct = (req, res) => {
    ModelProducts.destroyProduct(req.params.idProduct)
    .then(row => {
        res.status(204).send(row)
    })
    .catch(err => {
        res.status(400).send(err.message)
    })
}

module.exports = {
    createProduct,
    findOneProduct,
    findAllProducts,
    updateOneProduct,
    costUpdateProduct,
    destroyProduct
}
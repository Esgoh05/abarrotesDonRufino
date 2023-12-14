const knex = require('../config')

const create = (bodyProduct) => {
    return knex .insert(bodyProduct).into('products').returning('*')
}

const findOneProduct = (productId) => {
    return knex .select(['product_id', 'name', 'description', 'cost', 'sku'])
    .from('products')
    .where({active: true})
}

const findAllProducts = () => {
    return knex .select(['product_id', 'name', 'description', 'cost', 'sku'])
    .from('products')
    .where({active: true})
}

const updateProduct = (productId, bodyToUpdate) => {
    return knex
    .update(bodyToUpdate)
    .from('products')
    .where({'product_id': productId})
    .returning('*')
}

const costUpdateProduct = (productId, cost) => {
    return knex
    .update(cost)
    .from('products')
     .where({'product_id': productId})
     .returning('*')
     
}

const destroyProduct = (productId) => {
    return knex
    .del()
    .from('products')
    .where({product_id: productId})
}

module.exports= {
    create,
    findOneProduct,
    findAllProducts,
    updateProduct,
    costUpdateProduct,
    destroyProduct
}
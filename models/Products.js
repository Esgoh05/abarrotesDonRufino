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
module.exports= {
    create,
    findOneProduct,
    findAllProducts
}
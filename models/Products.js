const knex = require('../config')

const create = (bodyProduct) => {
    return knex .insert(bodyProduct).into('product').returning('*')
}

module.exports= {
    create
}
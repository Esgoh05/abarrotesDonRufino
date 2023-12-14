/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("sales_product").then(function (exists) {
        if (!exists) {
                return knex.schema.table("sales_product", function (table) {
                table.integer('customer_id')
                .unsigned()
                .references('customers.customer_id');
                table.integer('product_id')
                .unsigned()
                .references('products.product_id');
                });
            };
        });
    };

exports.down = function(knex) {
    return knex.schema.hasTable("sales_product").then(function (exists) {
        if (exists) {
            return knex.schema.table("sales_product", function (table) {
                table.dropColumn('customer_id'); //borro la columna customer
                table.dropColumn('product_id'); //borro la columna product
                });
            };
        });
    };

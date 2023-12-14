/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable("sales_products").then(function (exists)
    {
        if(!exists){
            return knex.schema.createTable("sales_products", function(table)
            {
                table.increments("id_sales").primary();
                table.integer("order_number").notNullable().unique();
                //table.integer("customer_id").notNullable();
                //table.integer("product_id").notNullable();
                table.date("sales_date").notNullable();
                table.integer("quantity_product").notNullable();
                table.decimal("sales_price", 12, 2).notNullable();
                table.timestamp("created_at").defaultTo(knex.fn.now());

            })
        }
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.hasTable("sales_products").then(function (exists){
        if(exists) {
            return knex.schema.dropTable("sales_products");
        }
    })
};

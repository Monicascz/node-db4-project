
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", table=>{
    table.increments("recipe_id")
    table.string("recipe_name").notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now());
    })
 .createTable("ingredients", table=>{
    table.increments("ingredient_id")
    table.string("ingredient_name").notNullable()
 }) // ingredients table doesn't have a foreign key so it is a good ont to go to next.   
 .createTable("steps", table=>{
     table.increments("step_id")
     table.integer("step_number")
        .unsigned()
     table.string("step_instructions")
     table.integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipe_id")//what column it is referencing (FOREIGN KEY)
        .inTable("recipes") // references the table ^^^ is referenced from. 
        .onDelete("CASCADE")
    })
 .createTable("step_ingredients", table=>{
     table.increments("step_ing_id")
     table.integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredient_id")
        .inTable("ingredients")
    table.integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
    table.integer("quantity")
 })
};

exports.down = function(knex) {
  return knex.schema    
    .dropTableIfExists("step_ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")

};

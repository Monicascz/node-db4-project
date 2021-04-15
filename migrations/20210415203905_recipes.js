
exports.up = function(knex) {
  return knex.schema
  .createTable("recipes", table=>{
    table.increments("recipe_id")
    table.string("recipe_name").notNullable().unique()
    table.timestamp('created_at').defaultTo(knex.fn.now());
    })
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
};

exports.down = function(knex) {
  
};

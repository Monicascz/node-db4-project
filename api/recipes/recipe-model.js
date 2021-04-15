const db = require('../../data/db-config.js')

function find(){
    return db("recipes as r")
    .join("steps as s", "r.recipe_id", "s.step_id")
    .select("r.recipe_id", "r.recipe_name", "r.created_at", "s.step_id", "s.step_number", "s.step_instructions", "i.ingredient_id", "i.ingredient_name", "si.quantity")
    .leftJoin("step_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")
}

async function getById(recipe_id){
    const recipeArr = await db('recipes as r')


}

module.exports = {
    find,
    getById,
}
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
    .join("steps as s", "r.recipe_id", "s.step_id")
    .select("r.recipe_id", "r.recipe_name", "r.created_at", "s.step_id", "s.step_number", "s.step_instructions", "i.ingredient_id", "i.ingredient_name", "si.quantity")
    .leftJoin("step_ingredients as si", "s.step_id", "si.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "si.ingredient_id")

    const recipeObj = {};
    recipeArr.forEach(recipe=>{
        if(!recipeObj.recipe_id && !recipeObj.recipe_name){
            recipeObj.recipe_id= recipe.recipe_id;
            recipeObj.created_at = recipe.create_at;
            recipeObj.steps=[];
        }
        if(recipe.recipe_id){
            recipeObj.steps.push({
                "step_id": recipe.step_id, 
                "step_number": recipe.step_number, 
                "step_instructions": recipe.step_instructions, 
                "ingredients": []
            })
        }
        if(recipe.ingredient_id){
            recipeObj.steps[recipe.step_number-1].ingredients.push({
                "ingredient_id": recipe.ingredients, "ingredient_name": recipe.ingredient_name, "quantity": recipe.quantity
            })
        }
    })
    return recipeObj;
}

module.exports = {
    find,
    getById,
}
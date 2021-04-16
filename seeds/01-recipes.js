


exports.seed = async function (knex) {
     await knex('recipes').insert([
        {recipe_name: "Spaghetti"},
        {recipe_name: "Pancake"},
        ])
    await knex('steps').insert([
        {step_number: 1 , step_instructions: "Put a large saucepan on a medium heat", recipe_id: 1},
        {step_number: 2 , step_instructions: "Add 1 tbsp olive oil", recipe_id: 1},
        {step_number: 3 , step_instructions: "Dice tomato", recipe_id: 1},
        {step_number: 1 , step_instructions: "Make pancake batter", recipe_id: 2},
        {step_number: 2 , step_instructions: "cook pancakes", recipe_id: 2},
        ])
    await knex('ingredients').insert([
        {ingredient_name: "Olive Oil"},
        {ingredient_name: "Tomato"},
        {ingredient_name: "Pancake Batter"},
        ])
    await knex('step_ingredients').insert([
       {ingredient_id: 1, step_id: 2, quantity: 0.014},
       {ingredient_id: 2, step_id: 3, quantity: 5},
       {ingredient_id: 3, step_id: 4, quantity: 1.5},
        ])
  }
  
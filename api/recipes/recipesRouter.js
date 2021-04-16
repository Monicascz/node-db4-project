const express = require('express')

const Recipes = require('./recipe-model.js')

const router = express.Router()


router.get('/', (req,res,next)=>{
 Recipes.find()
 .then(data=>{
     res.json(data)
 })  
 .catch(next) 
})

router.get('/:recipe_id', (req,res,next)=>{
    const {recipe_id} = req.params
    Recipes.getById(recipe_id)
    .then(data=>{
        res.json(data)
    })  
    .catch(next) 
   })


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router

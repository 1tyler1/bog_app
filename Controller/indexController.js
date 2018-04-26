const express = require('express')
const router = express.Router()

const Schema = require('../db/schema.js')
const { Creature } = Schema


// INDEX route
router.get('/', async (req, res) => {
  const creatures = await Creature.find({})
       
      .then((creatures) => {

        res.json(creatures)
      })
      .catch((error) => {
          console.log(error)
      })
})

// CREATE route
router.post('/', async (req, res) => {
  const newCreature = req.body
  const savedCreature = await Creature.create(newCreature)
    
  .then(() => {
   
  
    res.json(savedCreature)
  }) .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  }
)
})

// UPDATE route
router.put('/:id', async (req, res) => {
 
    const creatureId = req.params.id
    const updatedCreature = req.body
    const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature).then(() => {
    res.json(savedCreature)
  }) .catch((err) => {
    console.log(err)
    res.status(500).json(err)
  }
)})

// SHOW route
router.get('/:id', async (req, res) => {
  const creatureId = req.params.id
  const creature = await Creature.findById(creatureId)
  .then(() => {
   
    res.json(creature)
  }) .catch((err) => {
    console.log(err)
    res.json(err)
  })})

// DELETE route
router.delete('/:id', async (req, res) => {
  const creatureId = req.params.id
    await Creature.findByIdAndRemove(creatureId)

  .then(() => {
   
    res.json(creature)
  }) .catch((err) => {
    console.log(err)
    res.json(err)
  })})

module.exports = router
require('dotenv').config()
const mongoose = require('mongoose')
const { Creature } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URI)
    .then(connection => {
        console.log('Connected to MongoDB')
    })
    .catch(error => {
      console.log(error.message)
     })

const db = mongoose.connection

const saved = async () => {
  await Creature.remove()
  const luke = new Creature({name: 'Luke', description: 'Jedi'})
  await luke.save()
  const darth = new Creature({name: 'Darth Vader', description: 'Father of Luke'})
  await darth.save()
  db.close()
}

saved()
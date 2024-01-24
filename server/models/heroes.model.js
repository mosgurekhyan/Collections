const { model, Schema } = require('mongoose')

const HeroesSchema = Schema({
  author: {
    type: String,
    required: true
  },
  avatar: {
    type: String, 
    required: true
  },
  nikname: {
    type: String, 
    required: true
  },
  img: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  rating: {
    type: String, 
    required: true
  }
})

module.exports = model('heroe', HeroesSchema)
var express = require('express')
var router = express.Router()
const HeroesController = require('../controllers/HeroesController')
const controller = new HeroesController

/* GET Heroes listing. */
router.get('/', controller.getAll)

router.post('/add', controller.addHero)

router.get('/:id', controller.goToEdit)

router.put('/:id', controller.editHero)

router.delete('/:id', controller.deleteHero)

module.exports = router

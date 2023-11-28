const router = require('express').Router()
const gameController = require('../controller/game')

router.post('/insert', gameController.insertGame)

module.exports = router

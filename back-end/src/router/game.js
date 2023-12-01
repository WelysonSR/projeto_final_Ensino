const router = require('express').Router()
const gameController = require('../controller/game')

router.post('/insert', gameController.insertGame)
router.patch('/update/:id', gameController.updateGame)
router.delete('/delete/:id', gameController.deleteGame)
router.get('/', gameController.getAllGames)
router.get('/:id/platform', gameController.getPlatformByGames)

module.exports = router
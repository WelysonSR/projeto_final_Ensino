const router = require('express').Router()
const platformController = require('../controller/platform')

router.post('/insert', platformController.insertPlatform)
router.patch('/update/:id', platformController.updatePlatform)
router.delete('/delete/:id', platformController.deletePlatform)
router.get('/', platformController.getAllPlatform)
router.get('/:id/games', platformController.getGamesByPlatform)
router.post('/game', platformController.addGameToPlatform)
router.delete('/delete-game', platformController.removeGameFromPlatform)

module.exports = router

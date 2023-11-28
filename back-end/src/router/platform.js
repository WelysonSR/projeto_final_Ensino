const router = require('express').Router()
const platformController = require('../controller/platform')

router.post('/insert', platformController.insertPlatform)
router.patch('/update/:id', platformController.updatePlatform)
router.delete('/delete/:id', platformController.deletePlatform)
router.get('/', platformController.getAllPlatform)

module.exports = router

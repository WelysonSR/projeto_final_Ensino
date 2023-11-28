const router = require('express').Router()
const userController = require('../controller/user')

router.post('/create', userController.createUser)
router.post('/login', userController.login)
router.patch('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUserById)
router.patch('/disabled/:id', userController.logicalUserDeletionById)
router.get('/games/:id', userController.getGamesByUserId)
router.post('/game', userController.addGameToUser)
router.post('/delete-game', userController.removeGameFromUser)

module.exports = router

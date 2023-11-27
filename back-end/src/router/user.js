const router = require('express').Router()
const userController = require('../controller/user')

router.post('/create', userController.createUser)
router.post('/login', userController.login)
router.patch('/update/:id', userController.updateUser)
router.delete('/delete/:id', userController.deleteUserById)

module.exports = router
    

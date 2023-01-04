const express = require('express')
const router = express.Router({ mergeParams: true })
const { createUser, getUsers, deleteUser } = require('../controllers/userController')


router.route('/')
    .post(createUser)
    .get(getUsers)

router.route('/:userId')
    .delete(deleteUser)


module.exports = router
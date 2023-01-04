const express = require('express')
const router = express.Router({ mergeParams: true })
const { createItem, getAllItems } = require('../controllers/itemControllers')

router.route('/')
    .post(createItem)
    .get(getAllItems)

module.exports = router
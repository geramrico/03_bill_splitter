const express = require('express')
const router = express.Router()
const { createBill, getBills, getBill } = require('../controllers/billController');


router.route('/')
    .post(createBill)
    .get(getBills)

router.route('/:billId')
    .get(getBill)


module.exports = router
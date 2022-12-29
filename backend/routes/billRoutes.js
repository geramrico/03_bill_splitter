const express = require('express')
const router = express.Router()
const { createBill, getBills, getBill, updateBill, deleteBill } = require('../controllers/billController');

//Re-route into user router
//api/bills/:billId/users
const userRoutes = require('./userRoutes')
router.use('/:billId/users', userRoutes)

router.route('/')
    .post(createBill)
    .get(getBills)

router.route('/:billId')
    .get(getBill)
    .put(updateBill)
    .delete(deleteBill)



module.exports = router
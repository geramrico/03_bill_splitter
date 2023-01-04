const express = require('express')
const router = express.Router()
const { createBill, getBills, getBill, updateBill, deleteBill } = require('../controllers/billController');

//Re-route into User router
//api/bills/:billId/users
const userRoutes = require('./userRoutes')
router.use('/:billId/users', userRoutes)

//Re-route into Item router
//api/bills/:billId/items
const itemRoutes = require('./itemRoutes')
router.use('/:billId/items', itemRoutes)

router.route('/')
    .post(createBill)
    .get(getBills)

router.route('/:billId')
    .get(getBill)
    .put(updateBill)
    .delete(deleteBill)



module.exports = router
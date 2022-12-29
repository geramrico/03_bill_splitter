const { PrismaClient } = require('@prisma/client')
const asyncHandler = require('express-async-handler')

const prisma = new PrismaClient()

//@desc     Create new bill
//@route    POST /api/bills
//@access   Public
const createBill = asyncHandler(async (req, res) => {

    //Default bill creation will have, to later be updated by users in the Frontend
    /*
    {
        name: 'Bill for [date]',
        billDate: now(),
        amount: 0
    }
    */

    const date = new Date()
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const name = `Bill for ${date.toLocaleDateString('en-US', options)}`


    const createdBill = await prisma.bill.create({
        data: {
            name: name,
            billDate: date,
            amount: 0
        }
    })

    res.status(201).json(createdBill)
})

//@desc     Get all bills
//@route    GET /api/bills
//@access   Public
const getBills = asyncHandler(async (req, res) => {

    const bills = await prisma.bill.findMany()

    if (!bills) {
        res.status(404)
        throw new Error('Bills not found')
    }

    res.status(200).json(bills)
})

//@desc     Get one bill
//@route    GET /api/bills/:billId
//@access   Public
const getBill = asyncHandler(async (req, res) => {

    const billId = req.params.billId

    const bill = await prisma.bill.findUnique({
        where: {
            id: billId,
        }
    })

    if (!bill) {
        res.status(404)
        throw new Error('bill not found')
    }

    res.status(200).json(bill)
})

//@desc     Update one bill
//@route    PUT /api/bills/:billId
//@access   Public
const updateBill = asyncHandler(async (req, res) => {

    const billId = req.params.billId

    const bill = await prisma.bill.update({
        where: {
            id: billId,
        },


    })

    if (!bill) {
        res.status(404)
        throw new Error('bill not found')
    }

    res.status(200).json(bill)
})


module.exports = {
    createBill,
    getBills,
    getBill
}
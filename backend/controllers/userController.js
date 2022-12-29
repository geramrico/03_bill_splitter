const asyncHandler = require('express-async-handler')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//@desc     Create new user for a bill
//@route    POST /api/bills/:billId/users
//@access   Public
const createUser = asyncHandler(async (req, res) => {

    const billId = req.params.billId
    const name = req.body.name

    if (!name) {
        res.status(400)
        throw new Error('Add a user name')
    }

    if (!billId) {
        res.status(404)
        throw new Error('Bill not found')
    }

    const user = await prisma.user.create({
        data: {
            name: name,
            billId: billId
        },
        include: {
            bill: false
        }
    })

    res.status(201).json(user)

})

//@desc     Get all users related to bill
//@route    GET /api/bills/:billId/users
//@access   Public
const getUsers = asyncHandler(async (req, res) => {

    const billId = req.params.billId

    const bill = await prisma.bill.findFirst({ where: { id: billId } })

    if (!bill) {
        res.status(404)
        throw new Error('Bill not found')
    }

    const user = await prisma.user.findMany({ where: { billId: billId } })

    res.status(201).json(user)

})


module.exports = {
    createUser,
    getUsers
}
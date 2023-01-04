const asyncHandler = require('express-async-handler')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


//@desc     Create new item for a bill
//@route    POST /api/bills/:billId/items
//@access   Public
const createItem = asyncHandler(async (req, res) => {

    const billId = req.params.billId


    if (!billId) {
        res.status(404)
        throw new Error('Bill not found')
    }

    const item = await prisma.item.create({
        data: {
            ...req.body,
            billId: billId
        }
    })

    res.status(201).json(item)

})

//@desc     Get all bills for an item
//@route    GET /api/bills/:billId/items
//@access   Public
const getAllItems = asyncHandler(async (req, res) => {

    const billId = req.params.billId


    /*   if (!billId) {
          res.status(404)
          throw new Error('Bill not found')
      } */

    const billItems = await prisma.item.findMany({
        where: {
            billId: billId
        }
    })

    res.status(200).json(billItems)

})

module.exports = { createItem, getAllItems }



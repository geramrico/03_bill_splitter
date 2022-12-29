const { PrismaClient } = require('@prisma/client')
const asyncHandler = require('express-async-handler')

const prisma = new PrismaClient()

//@desc     Create new event
//@route    POST /api/events
//@access   Public
const createEvent = asyncHandler(async (req, res) => {
    const { name, eventDate } = req.body
    if (!name || !eventDate) {
        res.status(400)
        throw new Error('Send event name and date')
    }
    const createdPlan = await prisma.event.create({
        data: {
            name: name,
            eventDate: new Date(eventDate)
        }
    })
    res.status(201).json(createdPlan)
})

//@desc     Get all
//@route    GET /api/events
//@access   Public
const getEvents = asyncHandler(async (req, res) => {
    
    const event = await prisma.event.findMany()
    res.status(200).json(event)
})


module.exports = {
    createEvent,
    getEvents
}
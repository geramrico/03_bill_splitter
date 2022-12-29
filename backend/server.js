const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorHandler')

const app = express()

app.use(express.json())

// API Routes
// Event Routes
const eventRoutes = require('./routes/eventRoutes')
app.use('/api/events', eventRoutes)

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
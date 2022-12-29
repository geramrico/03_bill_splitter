const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8000
const { errorHandler } = require('./middleware/errorHandler')

const app = express()

app.use(express.json())

// API Routes
// Bill Routes
const billRoutes = require('./routes/billRoutes')
app.use('/api/bills', billRoutes)

app.use(errorHandler)
app.listen(PORT, () => console.log(`Server started on ${PORT}`))
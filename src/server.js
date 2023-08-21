const express = require('express')
const authRouter = require('./routes/authRoutes.js')
const connectDb = require('./config/database.js')
const transactionRouter = require('./routes/transactionRouter.js')
const app = express()
require("dotenv/config")

// routes > controller resServices envia para validar > services para validar > controller > routes
connectDb()
app.use(express.json())
app.use(authRouter)
app.use(transactionRouter)

app.listen(process.env.PORT, () => {
    console.log('Listening')
})
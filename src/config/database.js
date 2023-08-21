const mongoose = require('mongoose')
require("dotenv/config")

const connectDb = async () =>{
try {
await mongoose.connect(process.env.DATABASE_URI)
console.log('Connected to MongoDB')
} catch (error) {
console.log(error.message)
}
}

const desconnectDb = async () =>{

await mongoose.desconnect(process.env.DATABASE_URI)

}

module.exports = connectDb,desconnectDb
const UserSchema = require('../Schema/User.js');
const jwt = require('jsonwebtoken');
require("dotenv/config")

async function create(data){
return await UserSchema.create(data)
}

const findByEmail= async (email) => {
    const user = await UserSchema.findOne({email})
    return user
}

const generateToken = async (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1h'
    })
}

const findById= async (id) => {
    const user = await UserSchema.findById(id)
    return user
}

module.exports = {create,findByEmail,generateToken, findById}


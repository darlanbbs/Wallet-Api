const bcrypt = require('bcrypt')
const AuthRepository = require('../repositories/AuthRepository.js')


async function registro(body){
const HashPassword = bcrypt.hashSync(body.password, 10)

const userExist = await AuthRepository.findByEmail(body.email)

if(userExist) {
    throw new Error('User already exists')
}

return await AuthRepository.create({...body, password: HashPassword})
}

async function login(body){
const user = await AuthRepository.findByEmail(body.email)
if(!user) throw new Error('Email or password incorrect')
const passwordOk = bcrypt.compareSync(body.password,user.password)
if(!passwordOk) throw new Error('Email or password incorrect')


return await AuthRepository.generateToken(user._id)
}


async function userLogged(id){
  
const user = await AuthRepository.findById(id)
if(!user) throw new Error('User not found')
return user
}

module.exports ={
    registro,login,userLogged
}

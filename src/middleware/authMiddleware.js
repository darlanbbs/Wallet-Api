const jwt = require('jsonwebtoken')
require('dotenv/config')
const AuthRepository = require('../repositories/AuthRepository.js')
async function authMiddleware(req, res, next){
    const {authorization} = req.headers 

    if(!authorization) return res.status(401).send({message: 'Token not found'})

    const parts = authorization?.split(' ')
    if(parts.length !== 2) return res.status(401).send({message: 'Token error'})
    
    const [scheme, token] = parts

    if(!/^Bearer$/i.test(scheme)) return res.status(401).send({message: 'Token malformatted'})
    
   jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
       if(err)return res.status(401).send({message: 'Token invalid'})
       if(!decoded) return res.status(401).send({message: 'Token invalid'})


    const user = await AuthRepository.findById(decoded.id)
    if(!user) return res.status(401).send({message: 'Token Invalid'})

    res.locals.user = user
    next()
   })
}

module.exports = authMiddleware
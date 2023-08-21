const transcationRepository = require('../repositories/transcationRepository.js')
async function create(body,id){
    if(!id) throw new Error('id is required')
    
    return await transcationRepository.create({...body, userId: id})
}

async function findAllByUser(id){
    if(!id) throw new Error('id is required') 
    return await transcationRepository.findAllByUser(id)
}


module.exports = {
    create,findAllByUser
}


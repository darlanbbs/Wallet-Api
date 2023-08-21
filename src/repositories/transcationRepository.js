const TransactionSchema = require('../Schema/Transaction.js');

async function create(data){
    return await TransactionSchema.create(data)
    }

    async function findAllByUser(id){
        if(!id) throw new Error('id is required')
        return await TransactionSchema.find({userId: id})
        
    }


module.exports = {
 create,findAllByUser
}


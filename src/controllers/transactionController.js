const transactionService = require('../services/transactionService')

async function create(req,res){
    const body = req.body;
    const {_id:id} = res.locals.user

    try {
        const resService = await transactionService.create(body,id)
        return res.status(201).send(resService)
    } catch (error) {
       res.status(409).send(error.message)
    }

}

async function findAllByUser(req,res){
    const{ _id:id} = res.locals.user

    try {
        const resService = await transactionService.findAllByUser(id)
        return res.status(201).send(resService)
    }catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    create,findAllByUser
}


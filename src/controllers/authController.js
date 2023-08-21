const authService = require('../services/authService')

async function registro(req,res){
    const body = req.body;

    try {
        const resService = await authService.registro(body)
        res.status(201).send(resService)
    } catch (error) {
       res.status(409).send(error.message)
    }

}

async function login(req,res){
    const body = req.body;

    try {
        const token = await authService.login(body)
        return res.send(token)
    } catch (error) {
       res.status(409).send(error.message)    
    }
}

async function userLogged(req,res){
    const {_id:id} = res.locals.user
    try {
        const user = await authService.userLogged(id)
        return res.send(user)
    }catch (error) {
       res.status(404).send(error.message)
    }
}
module.exports = {
    registro,login,userLogged
}
function schemaValidationMiddleware(schema){
return(req,res,next)=>{
    const {error} = schema.validate(req.body,{abortEarly:false})
    if(error){
        const erros = error.details.map((details) => details.message)
        return res.status(422).send(erros)
    }

    next()
}
}

module.exports = schemaValidationMiddleware
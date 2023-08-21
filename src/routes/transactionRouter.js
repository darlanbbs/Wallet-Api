const Router = require('express')
const transactionController = require('../controllers/transactionController.js');
const authMiddleware = require('../middleware/authMiddleware.js');
const createTransaction = require('../Schema/validation/createTransaction.js')
const schemaValidationMiddleware = require('../middleware/schemaValidationMiddleware.js')



const transactionRouter = Router()

transactionRouter.post('/transactions',schemaValidationMiddleware(createTransaction),authMiddleware, transactionController.create);
transactionRouter.get('/transactions',authMiddleware, transactionController.findAllByUser);

module.exports = transactionRouter


const Router = require('express')
const authController = require('../controllers/authController.js')
const authMiddleware = require('../middleware/authMiddleware.js');
const createUser = require('../Schema/validation/createUser.js')
const authUser = require('../Schema/validation/authUser.js')
const schemaValidationMiddleware = require('../middleware/schemaValidationMiddleware.js')
const authRouter = Router()



authRouter.post('/registro',schemaValidationMiddleware(createUser), authController.registro);
authRouter.post('/login', schemaValidationMiddleware(authUser),authController.login);
authRouter.get('/myProfile', authMiddleware, authController.userLogged);

module.exports = authRouter
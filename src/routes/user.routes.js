import express from 'express'
import { authGuard, roleGuard } from '../Guards/index.js'
import { uservalidator, loginvalidator } from '../validation/index.js'
import {
    registermiddleware,
    loginmiddleware,
    updateusermiddleware,
} from '../middlewares/index.js'
import {
    registerCon,
    loginCon,
    updateCon,
    deleteuserByemail,
    getAllusers,
    getuserbyEmail,
} from '../controllers/index.js'

export const userrouter = express.Router()

userrouter.post('/register', registermiddleware(uservalidator), registerCon)
userrouter.post('/login', loginmiddleware(loginvalidator), loginCon)
userrouter.put(
    '/:email',
    authGuard,
    roleGuard(['admin', 'superadmin']),
    updateusermiddleware(uservalidator),
    updateCon,
)
userrouter.delete(
    '/:email',
    authGuard,
    roleGuard(['admin', 'superadmin']),
    deleteuserByemail,
)
userrouter.get('/', getAllusers)
userrouter.get('/:email', getuserbyEmail)

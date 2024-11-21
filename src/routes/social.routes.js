import express from 'express'
import { checksocialvalidator } from '../validation/index.js'
import {
    checksocialsprofiledata,
    updatesocialsprofiledata,
} from '../middlewares/index.js'
import {
    getSocialscon,
    getSocialbyid,
    createSocial,
    UpdateSocial,
    deleteSocial,
} from '../controllers/index.js'

export const socialrouter = express.Router()

socialrouter.get('/', getSocialscon)
socialrouter.get('/:id', getSocialbyid)
socialrouter.post(
    '/',
    checksocialsprofiledata(checksocialvalidator),
    createSocial,
)
socialrouter.put(
    '/:id',
    updatesocialsprofiledata(checksocialvalidator),
    UpdateSocial,
)
socialrouter.delete('/:id', deleteSocial)

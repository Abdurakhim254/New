import express from 'express'
import { cartItemSchema } from '../validation/index.js'
import {
    CheckcartItemmiddleware,
    updatecartItemmiddleware,
} from '../middlewares/index.js'
import {
    getAllcart_tems,
    getAllcart_temByid,
    Createcart_item,
    Updatecart_item,
    Deletecart_item,
} from '../controllers/index.js'

export const cart_item_router = express.Router()

cart_item_router.get('/', getAllcart_tems)
cart_item_router.get('/:id', getAllcart_temByid)
cart_item_router.post(
    '/',
    CheckcartItemmiddleware(cartItemSchema),
    Createcart_item,
)
cart_item_router.put(
    '/:id',
    updatecartItemmiddleware(cartItemSchema),
    Updatecart_item,
)
cart_item_router.delete('/:id', Deletecart_item)

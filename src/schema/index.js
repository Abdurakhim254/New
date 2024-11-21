import { logger } from '../utils/logger.js'

import { createCarttable } from './cart/cart.schema.js'
import { socialprofiletable } from './social/social.schema.js'
import { createAddresstable } from './address/address.schema.js'
import { createProductable } from './products/products.schema.js'
import { createWhishlistTable } from './whishlist/whishlist.schema.js'
import { createReviewTable } from './reviewsch/review.schema.js'
import { createOrderstable } from './orders/order.schema.js'
import { createCartItemtable } from './cart/cart_item_schema.js'

export const createAlltables = async () => {
    try {
        await socialprofiletable()
        await createAddresstable()
        await createProductable()
        await createWhishlistTable()
        await createReviewTable()
        await createCarttable()
        await createOrderstable()
        await createCartItemtable()
    } catch (error) {
        logger.error(error)
        return error
    }
}

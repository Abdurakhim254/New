import db from '../database/index.js'
import { logger } from '../utils/logger.js'

export const getallwhislists = async () => {
    try {
        const wishlists = await db('whishlist').select('*')
        return wishlists
    } catch (error) {
        logger.error(error)
        return error.message
    }
}

export const getwhistbyid = async (id) => {
    try {
        const wishlist = await db('whishlist').where({ id }).first()
        return wishlist || 'Wishlist topilmadi'
    } catch (error) {
        logger.error(error)
        return error.message
    }
}

export const createwhislist = async ({
    user_id,
    product_id,
    create_at,
    update_at,
}) => {
    try {
        const wishlistData = { user_id, product_id }

        if (create_at) wishlistData.create_at = create_at
        if (update_at) wishlistData.update_at = update_at

        const [newWishlist] = await db('whishlist')
            .insert(wishlistData)
            .returning('*')
        return newWishlist
    } catch (error) {
        logger.error(error)
        return error.message
    }
}

export const updatewhislist = async ({ id, user_id, product_id }) => {
    try {
        const updateData = { user_id, product_id }

        const [updatedWishlist] = await db('whishlist')
            .where({ id })
            .update(updateData)
            .returning('*')
        return updatedWishlist || 'Yangilanadigan wishlist topilmadi'
    } catch (error) {
        logger.error(error)
        return error.message
    }
}

export const deletewhislist = async (id) => {
    try {
        const [deletedWishlist] = await db('whishlist')
            .where({ id })
            .del()
            .returning('*')
        return deletedWishlist || "O'chiriladigan wishlist topilmadi"
    } catch (error) {
        logger.error(error)
        return error.message
    }
}

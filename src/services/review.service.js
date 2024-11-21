import db from '../database/index.js'

export const reviews = async () => {
    const allReviews = await db('reviews').select('*')
    if (allReviews.length >= 1) {
        return allReviews
    } else {
        return 'Reviewlar topilmadi'
    }
}

export const reviewbyid = async (id) => {
    const review = await db('reviews').where({ id }).first()
    if (review) {
        return review
    } else {
        return 'Review topilmadi'
    }
}

export const createreview = async ({
    user_id,
    product_id,
    rating,
    comment,
    created_at,
    updated_at,
}) => {
    const reviewData = {
        user_id,
        product_id,
        rating,
        comment,
    }

    if (created_at) reviewData.created_at = created_at
    if (updated_at) reviewData.updated_at = updated_at

    const [newReview] = await db('reviews').insert(reviewData).returning('*')
    return newReview
}

export const updatereview = async ({
    user_id,
    product_id,
    rating,
    comment,
    created_at,
    updated_at,
    id,
}) => {
    const updateData = {
        user_id,
        product_id,
        rating,
        comment,
    }

    if (created_at) updateData.created_at = created_at
    if (updated_at) updateData.updated_at = updated_at

    const [updatedReview] = await db('reviews')
        .where({ id })
        .update(updateData)
        .returning('*')

    if (updatedReview) {
        return updatedReview
    } else {
        return 'Yangilanadigan review topilmadi'
    }
}

export const deletereview = async (id) => {
    const existingReview = await db('reviews').where({ id }).first()

    if (!existingReview) {
        return "O'chiriladigan review topilmadi"
    }

    const [deletedReview] = await db('reviews')
        .where({ id })
        .del()
        .returning('*')
    return deletedReview
}

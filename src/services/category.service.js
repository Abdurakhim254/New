import { logger } from '../utils/logger.js'

export const getCategoryes = async () => {
    try {
        const result = await knex('category').select('*')
        if (result.rows.length >= 1) {
            return result.rows
        } else {
            return 'Categorylar topilmadi'
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}

export const getcategorybyid = async (id) => {
    try {
        const result = await knex('category').where({ id }).first()
        if (result.rows.length >= 1) {
            return result.rows
        } else {
            return 'Category topilmadi'
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}

export const createCategory = async ({
    name,
    description,
    tag,
    created_at,
    updated_at,
}) => {
    try {
        await knex('category').insert({
            name,
            description,
            tag,
            created_at,
            updated_at,
        })

        return 'Category yaratildi'
    } catch (error) {
        logger.error(error)
        return error
    }
}

export const updatecategory = async ({
    name,
    description,
    tag,
    created_at,
    updated_at,
    id,
}) => {
    try {
        const result = await knex('category').where({ id }).first()

        if (result.rows.length >= 1) {
            await knex('category').where({ id }).update({
                name,
                description,
                tag,
                created_at,
                updated_at,
            })

            return 'Category yangilandi'
        } else {
            return 'Yangilanadigan Category topilmadi'
        }
    } catch (error) {
        logger.error(error)
        return error
    }
}

export const deletecategory = async (id) => {
    try {
        const result = await knex('category').where({ id }).first()

        if (result.rows[0]) {
            await knex('category').where({ id }).del()
            return "Category o'chirildi"
        }

        return "O'chiriladigan Category topilmadi"
    } catch (error) {
        logger.error(error)
        return error
    }
}

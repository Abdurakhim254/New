import { pool } from '../Database/index.js'

export const getCategoryes = async () => {
    const result = await knex('category').select('*')
    if (result.rows.length >= 1) {
        return result.rows
    } else {
        return 'Categorylar topilmadi'
    }
}

export const getcategorybyid = async (id) => {
    const result = await knex('category').where({ id }).first()
    if (result.rows.length >= 1) {
        return result.rows
    } else {
        return 'Category topilmadi'
    }
}

export const createCategory = async ({
    name,
    description,
    tag,
    created_at,
    updated_at,
}) => {
    if (!created_at || !updated_at) {
        if (!created_at || !updated_at) {
            await knex('category').where({ email }).update({
                name,
                description,
                tag,
            })
        } else {
            await knex('category').where({ email }).update({
                name,
                description,
                tag,
                created_at,
                updated_at,
            })
        }
        await pool.query(query, arr)
        return 'Category yaratildi'
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
    const result = await knex('category').where({ id }).first()
    if (result.rows.length >= 1) {
        if (!created_at || !updated_at) {
            await knex('category').where({ email }).update({
                name,
                description,
                tag,
                id,
            })
        } else {
            await knex('category').where({ email }).update({
                name,
                description,
                tag,
                created_at,
                updated_at,
                id,
            })
        }
        return 'Category yangilandi'
    } else {
        return 'Yangilanadigan Category topilmadi'
    }
}

export const deletecategory = async (id) => {
    const result = await knex('category').where({ id }).first()
    if (result.rows.length >= 1) {
        await pool.query(deletequery, [id])
        return "Category o'chirildi"
    } else {
        return "O'chiriladigan Category topilmadi"
    }
}

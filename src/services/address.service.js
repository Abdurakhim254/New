import db from '../database/index.js'

export const getaddresses = async () => {
    const addresses = await db('address').select('*')
    if (addresses.length >= 1) {
        return addresses
    } else {
        return 'Addreslar topilmadi'
    }
}

export const getaddressByid = async (id) => {
    const address = await db('address').where({ id }).first()
    if (address) {
        return address
    } else {
        return 'Address topilmadi'
    }
}

export const createaddress = async (
    user_id,
    title,
    created_at,
    address_line_1,
    address_line_2,
    country,
    city,
    postal_code,
    phone_number,
    landmark,
) => {
    const addressData = {
        user_id,
        title,
        address_line_1,
        address_line_2,
        country,
        city,
        postal_code,
        phone_number,
        landmark,
    }

    if (created_at) {
        addressData.created_at = created_at
    }

    await db('address').insert(addressData)
    return 'Address yaratildi'
}

export const updateaddressByid = async (
    user_id,
    title,
    created_at,
    address_line_1,
    address_line_2,
    country,
    city,
    postal_code,
    phone_number,
    landmark,
    id,
) => {
    const existingAddress = await db('address').where({ id }).first()

    if (!existingAddress) {
        return 'Yangilanadigan Address topilmadi'
    }

    const updateData = {
        user_id,
        title,
        address_line_1,
        address_line_2,
        country,
        city,
        postal_code,
        phone_number,
        landmark,
    }

    if (created_at) {
        updateData.created_at = created_at
    }

    await db('address').where({ id }).update(updateData)
    return 'Addres yangilandi'
}

export const deleteaddressByid = async (id) => {
    const existingAddress = await db('address').where({ id }).first()

    if (!existingAddress) {
        return "O'chiriladigan Address topilmadi"
    }

    await db('address').where({ id }).del()
    return "Addres o'chirildi"
}

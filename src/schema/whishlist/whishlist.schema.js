import pool from '../../database/index.js'
import { logger } from '../../utils/logger.js'

export const createWhishlistTable = async () => {
    try {
        await pool.query(`
      CREATE TABLE IF NOT EXISTS whishlist(
        id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(id),
        product_id INT REFERENCES product(id),
        create_at timestamp default CURRENT_TIMESTAMP,
        update_at timestamp default CURRENT_TIMESTAMP
      )
    `)
        logger.info('Table yaratildi')
    } catch (error) {
        logger.error(error)
        return error
    }
}

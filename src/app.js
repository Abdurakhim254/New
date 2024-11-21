import express from 'express'
import morgan from 'morgan'

import db from './database/index.js'
import { logger } from './utils/index.js'
import { up } from '../migrations/20241121191125_migrate_1.js'
import { userrouter, categoryroutes } from './routes/index.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/users', userrouter)
app.use('/categories', categoryroutes)

app.get('/api/v1/setup', async (req, res) => {
    try {
        await up(db)

        res.send('ok')
    } catch (error) {
        logger.error(error)
        res.status(500).send(error.message)
    }
})

export default app

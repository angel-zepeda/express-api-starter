import express, { json, Express } from 'express'
import cors from 'cors'
import router from './routes'
import { logs } from './utils'

const app: Express = express()

app.use(json())
app.use(cors({ origin: ['http://localhost:8080', 'http://localhost:3000'] }))
app.use(logs().tiny)

app.use('/api/v1/', router)

export default app

import app from './app'
import { connectMongo } from './dbConnection'

require('dotenv').config()

app.listen(process.env.PORT, async () => {
  // TODO: use pino for logging
  console.log(`Server is running in port ${process.env.PORT}`)
  await connectMongo()
})

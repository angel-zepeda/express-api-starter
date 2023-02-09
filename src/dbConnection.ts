import mongoose from 'mongoose'

mongoose.set('strictQuery', false)

export const connectMongo = async (): Promise<typeof mongoose> => {
  try {
    return await mongoose.connect(process.env.MONGO_URI as string, {
      dbName: process.env.DATABASE,
    })
  } catch (error) {
    throw new Error(`Cannot connect to database: ${error}`)
  }
}

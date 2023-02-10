import { Schema, model } from 'mongoose'

import { IUserModel } from '../types'

const userSchema = new Schema<IUserModel>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
})

export const User = model<IUserModel>('User', userSchema)

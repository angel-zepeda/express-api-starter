import { ObjectId } from 'mongoose'

export interface IUserModel {
  _id: ObjectId
  name: string
  age: number
}

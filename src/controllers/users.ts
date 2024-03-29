import { Request, Response } from 'express'

import { User } from '../models'

class UserController {
  async getAll(_req: Request, res: Response) {
    try {
      const users = await User.find({})
      if (!users) return res.status(400).json({ message: 'NOT FOUND' })

      return res.status(200).json({ users })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params
      const user = await User.findById(id)

      if (!user) return res.status(400).json({ message: 'NOT FOUND' })

      return res.status(200).json({ user })
    } catch (error) {
      return res.status(500).json({ error })
    }
  }
}

export const userController = new UserController()

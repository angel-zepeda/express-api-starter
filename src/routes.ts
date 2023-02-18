import { Router, Request, Response } from 'express'
import { userController } from './controllers'

const router: Router = Router()

router.get('/healthy', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hola mundo!' })
})

// User routes
router.get('/users', userController.getAll)
router.get('/user/:id', userController.getById)

export default router

import { Router, Request, Response } from 'express'

const router: Router = Router()

router.get('/healthy', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hola mundo!' })
})

export default router

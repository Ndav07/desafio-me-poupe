import * as express from 'express'
import { Request, Response, NextFunction } from 'express'
import 'express-async-errors'


import { router } from "@shared/infra/express/routes/routers";
import { AppError } from '@shared/errors/AppError'

const app = express()
const port = 3000
app.use(express.json())
app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    })
  }

  return res.status(500).json({
    status: 'error',
    message: `Internal serve error - ${err.message}`,
  })
})

app.listen(port, () => {
  return console.log(`API start in ... http://localhost:${port}`)
})

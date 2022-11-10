import { Router } from 'express'

import { averageCalculation } from '@shared/infra/express/routes/average-calculation.routes'

const router = Router()

router.use('/average', averageCalculation)

export { router }

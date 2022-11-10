import { Router } from 'express'

import { averageCalculation } from '@shared/infra/express/routes/average-calculation.routes'
import { cep } from '@shared/infra/express/routes/cep.routes'

const router = Router()

router.use('/average', averageCalculation)
router.use('/cep', cep)

export { router }

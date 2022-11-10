import { Router } from 'express'

import { AverageCalculationController } from '@modules/average/useCases/average-calculation.controller'

const averageCalculation = Router()

const averageCalculationController = new AverageCalculationController()

averageCalculation.post('/', averageCalculationController.handle)

export { averageCalculation }

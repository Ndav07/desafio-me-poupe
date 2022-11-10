import { Request, Response } from 'express'

import { AverageCalculationUseCase } from './average-calculation.useCase'
import { AverageCalculationRepository } from '../repositories/avarege-calculation.repository'

class AverageCalculationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { numberOne, numberTwo } = req.body

    const avaregeCalculationRepository = new AverageCalculationRepository()
    const averageCalculationUseCase = new AverageCalculationUseCase(avaregeCalculationRepository)

    const average = await averageCalculationUseCase.execute({ numberOne, numberTwo })
    
    return res.status(200).json(average)
  }
}

export { AverageCalculationController }

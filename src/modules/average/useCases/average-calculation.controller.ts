import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { AverageCalculationUseCase } from './average-calculation.useCase'

class AverageCalculationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { numberOne, numberTwo } = req.body

    const averageCalculationUseCase = container.resolve(AverageCalculationUseCase)
    const average = await averageCalculationUseCase.execute({ numberOne, numberTwo })
    
    return res.status(200).json(average)
  }
}

export { AverageCalculationController }

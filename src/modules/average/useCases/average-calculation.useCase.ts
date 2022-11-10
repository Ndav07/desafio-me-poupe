import { AppError } from '@shared/errors/AppError'
import { IAvaregeCalculationRepository } from '@modules/average/repositories/Iavarege-calculation-repository'

interface IRequest {
  numberOne: number
  numberTwo: number
}

class AverageCalculationUseCase {
  constructor(private readonly avaregeCalculationRepository: IAvaregeCalculationRepository) {}
  async execute({ numberOne, numberTwo }: IRequest): Promise<number> {
    if (!numberOne || !numberTwo) {
      throw new AppError('Parameters not sent')
    }
    if (isNaN(numberOne) || isNaN(numberTwo)) {
      throw new AppError('Parameters are not numbers')
    }
    const average = await this.avaregeCalculationRepository.avarege({ numberOne, numberTwo })

    return average
  }
}

export { AverageCalculationUseCase }

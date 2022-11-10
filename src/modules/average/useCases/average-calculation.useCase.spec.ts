import 'reflect-metadata'
import { AppError } from '@shared/errors/AppError'

import { AverageCalculationUseCase } from '@modules/average/useCases/average-calculation.useCase'
import { AverageCalculationRepository } from '@modules/average/repositories/avarege-calculation.repository'


describe('Average calculation', () => {
  
  let avaregeCalculationRepository: AverageCalculationRepository
  let averageCalculationUseCase: AverageCalculationUseCase

  beforeEach(() => {
    avaregeCalculationRepository = new AverageCalculationRepository()
    averageCalculationUseCase = new AverageCalculationUseCase(avaregeCalculationRepository)
  })

  it('should be able to calculate the average', async () => {
    const numbers = {
      numberOne: 4.7564, 
      numberTwo: 2.653
    }

    const average = await averageCalculationUseCase.execute(numbers)

    expect(average).toEqual(3.70)
  })

  it('should not be able to calculate the average, without the value of some paramenter', async () => {
    expect(async () => {
      const numbers = {
        numberOne: 4.7564, 
        numberTwo: Number()
      }
  
      const average = await averageCalculationUseCase.execute(numbers)
      expect(average).toEqual(4.76)

    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to calculate the average, without the value of some paramenter', async () => {
    expect(async () => {
      const numbers = {
        numberOne: Number(), 
        numberTwo: 4.7564
      }
  
      const average = await averageCalculationUseCase.execute(numbers)
      expect(average).toEqual(4.76)

    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to calculate the average, with parameter value of type other than number', async () => {
    expect(async () => {
      const numbers = {
        numberOne: Number('tetetrere'), 
        numberTwo: 4.7564
      }
  
      const average = await averageCalculationUseCase.execute(numbers)
      expect(average).toEqual(4.76)

    }).rejects.toBeInstanceOf(AppError)
  })
})

import { container } from 'tsyringe'

import { IAvaregeCalculationRepository } from '@modules/average/repositories/Iavarege-calculation.repository'
import { AverageCalculationRepository } from '@modules/average/repositories/avarege-calculation.repository'

container.registerSingleton<IAvaregeCalculationRepository>(
  'AverageCalculationRepository',
  AverageCalculationRepository
)

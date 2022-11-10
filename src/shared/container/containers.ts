import { container } from 'tsyringe'

import { IAvaregeCalculationRepository } from '@modules/average/repositories/Iavarege-calculation.repository'
import { AverageCalculationRepository } from '@modules/average/repositories/avarege-calculation.repository'

import { ICepRepository } from '@modules/cep/repositories/Icep.repository'
import { CepRepository } from '@modules/cep/repositories/cep.repository'

container.registerSingleton<IAvaregeCalculationRepository>(
  'AverageCalculationRepository',
  AverageCalculationRepository
)

container.registerSingleton<ICepRepository>(
  'CepRepository',
  CepRepository
)

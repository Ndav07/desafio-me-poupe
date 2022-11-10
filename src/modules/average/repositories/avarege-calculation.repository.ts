import { fixedSimpleRound } from 'simple-round'

import {
  IAvarege,
  IAvaregeCalculationRepository,
} from './Iavarege-calculation.repository'

class AverageCalculationRepository implements IAvaregeCalculationRepository {
  async avarege({ numberOne, numberTwo }: IAvarege): Promise<number> {
    const avarege = fixedSimpleRound((Number(numberOne) + Number(numberTwo)) / 2)
    return Number(avarege)
  }
}

export { AverageCalculationRepository }

import {
  IAvarege,
  IAvaregeCalculationRepository,
} from './Iavarege-calculation-repository'

class AverageCalculationRepository implements IAvaregeCalculationRepository {
  async avarege({ numberOne, numberTwo }: IAvarege): Promise<number> {
    const avarege = Math.round((Number(numberOne) + Number(numberTwo)) / 2)
    return parseFloat(avarege.toFixed(2))
  }
}

export { AverageCalculationRepository }

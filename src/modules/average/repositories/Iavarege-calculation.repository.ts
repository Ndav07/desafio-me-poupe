interface IAvarege {
  numberOne: number
  numberTwo: number
}

interface IAvaregeCalculationRepository {
  avarege(data: IAvarege): Promise<number>
}

export { IAvaregeCalculationRepository, IAvarege }
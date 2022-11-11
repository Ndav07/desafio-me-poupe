import 'reflect-metadata'
import { AppError } from "@shared/errors/AppError";

import { FindCepInformationUseCase } from "@modules/cep/useCases/find-cep-information.useCase";
import { InMemoryCepRepository } from "@modules/cep/repositories/in-memory/in-memory-cep.repository";

describe('Find information by CEP', () => {

  let inMemoryCepRepository: InMemoryCepRepository
  let findCepInformationUseCase: FindCepInformationUseCase

  beforeEach(() => {
    inMemoryCepRepository = new InMemoryCepRepository()
    findCepInformationUseCase = new FindCepInformationUseCase(inMemoryCepRepository)
  })

  it('should be able to find informations of cep', async () => {
    const cep = '63195000'

    const response = await findCepInformationUseCase.execute(cep)

    expect(response.cep).toEqual(cep)
  })

  it('should be able to find informations of cep and receive a message that the neighborhood was not found', async () => {
    const cep = '63195000'

    const response = await findCepInformationUseCase.execute(cep)

    expect(response.cep).toEqual(cep)
    expect(response.bairro).toEqual('Bairro não encontrado')
  })

  it('should not be able to find informations of cep invalid', async () => {
    expect(async () => {
      const cep = '6319500'
  
      const response = await findCepInformationUseCase.execute(cep)
  
      expect(response.cep).toEqual(cep)
    }).rejects.toBeInstanceOf(AppError)
  })

  it('should not be able to find informations of cep NotFound', async () => {
    expect(async () => {
      const cep = '88742479'
  
      await findCepInformationUseCase.execute(cep)
  
    }).rejects.toBeInstanceOf(TypeError)
  })
})
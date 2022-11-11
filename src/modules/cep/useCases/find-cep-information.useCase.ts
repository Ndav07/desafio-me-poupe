import { inject, injectable } from 'tsyringe'

import { AppError } from '@shared/errors/AppError'
import { ICepRepository, IResponse } from '../repositories/Icep.repository'

@injectable()
class FindCepInformationUseCase {
  constructor(@inject('CepRepository') private cepRepository: ICepRepository) {}
  isValidCep(cep: string): boolean {
    const pattern = /^[0-9]{5}[0-9]{3}$/
    return pattern.test(cep)
  }

  async execute(cep: string): Promise<IResponse> {
    if(this.isValidCep(cep) === false) {
      throw new AppError('CEP invalid!!!')
    }

    const response = await this.cepRepository.findInformation(cep)
    if(!response.cep) {
      throw new AppError('CEP NotFound!!!', 404)
    }

    if(!response.bairro) {
      response.bairro = 'Bairro não encontrado'
      return response
    } else {
      return response
    }

  }
}

export { FindCepInformationUseCase }

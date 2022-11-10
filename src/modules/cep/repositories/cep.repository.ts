import axios from 'axios'

import { AppError } from '@shared/errors/AppError'
import { ICepRepository, IResponse } from './Icep.repository'

class CepRepository implements ICepRepository {
  async findInformation(cep: string): Promise<IResponse> {
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const response = await axios(url).catch(() => {
      throw new AppError(`Cep: ${cep} NotFound`, 404)
    })
    return response.data
  }
}

export { CepRepository }

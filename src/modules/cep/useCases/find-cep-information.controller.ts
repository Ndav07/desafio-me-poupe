import { container } from 'tsyringe'
import { Request, Response } from 'express'

import { FindCepInformationUseCase } from './find-cep-information.useCase'

class FindCepInformationController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { cep } = req.params

    const findCepInformationUseCase = container.resolve(
      FindCepInformationUseCase
    )
    const response = await findCepInformationUseCase.execute(cep)

    return res.status(200).json(response)
  }
}

export { FindCepInformationController }

import { Router } from 'express'

import { FindCepInformationController } from '@modules/cep/useCases/find-cep-information.controller'

const cep = Router()

const findCepInformationController = new FindCepInformationController()

cep.get('/:cep', findCepInformationController.handle)

export { cep }

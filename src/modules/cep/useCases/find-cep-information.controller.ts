import { Request, Response } from "express";


class FindCepInformationController {
  async handle(req: Request, res: Response): Promise<Response> {

    return res.status(200).json()
  }
}

export { FindCepInformationController }
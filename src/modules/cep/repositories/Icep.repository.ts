interface IResponse {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

interface ICepRepository {
  findInformation(cep: string): Promise<IResponse>
}

export { ICepRepository, IResponse }

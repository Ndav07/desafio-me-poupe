import { ICepRepository, IResponse } from "../Icep.repository";

class InMemoryCepRepository implements ICepRepository {
  ceps = [
    {
      "cep": "63195000",
      "logradouro": "",
      "complemento": "",
      "bairro": "",
      "localidade": "Altaneira",
      "uf": "CE",
      "ibge": "2300606",
      "gia": "",
      "ddd": "88",
      "siafi": "1311"
    },
    {
      "cep": "63118270",
      "logradouro": "Rua Joceli Pinheiro",
      "complemento": "",
      "bairro": "Parque Recreio",
      "localidade": "Crato",
      "uf": "CE",
      "ibge": "2304202",
      "gia": "",
      "ddd": "88",
      "siafi": "1385"
    },
    {
      "cep": "61902145",
      "logradouro": "Rua das Flores",
      "complemento": "",
      "bairro": "Coqueiral",
      "localidade": "Maracanaú",
      "uf": "CE",
      "ibge": "2307650",
      "gia": "",
      "ddd": "85",
      "siafi": "1585"
    },
    {
      "cep": "63165000",
      "logradouro": "",
      "complemento": "",
      "bairro": "",
      "localidade": "Nova Olinda",
      "uf": "CE",
      "ibge": "2309201",
      "gia": "",
      "ddd": "88",
      "siafi": "1485"
    }
  ] 

  async findInformation(cep: string): Promise<IResponse> {
    return this.ceps.find((cidade) => cidade.cep === cep)
  }
}

export { InMemoryCepRepository }
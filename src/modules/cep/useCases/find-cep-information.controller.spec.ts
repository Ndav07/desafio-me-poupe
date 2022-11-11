import { app } from '../../../app'
import request from 'supertest'

describe('Find information by CEP', () => {
  it('should be able to find informations of cep', async () => {
    const cep = '63195000'
    const response = await request(app).get(`/cep/${cep}`)

    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('cep')
  })

  it('should not be able to find informations of cep invalid', async () => {
    const cep = '6319500'
    const response = await request(app).get(`/cep/${cep}`)

    expect(response.status).toEqual(400)
    expect(response.body.message).toEqual('CEP invalid!!!')
  })

  it('should not be able to find informations of cep NotFound', async () => {
    const cep = '88742479'
    const response = await request(app).get(`/cep/${cep}`)

    expect(response.status).toEqual(404)
    expect(response.body.message).toEqual('CEP NotFound!!!')
  })
})

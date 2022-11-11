import { app } from '../../../app'
import request from 'supertest'

describe('Average Calculation', () => {
  it('should be able calculate average', async () => {
    const response = await request(app).post('/average').send({
      numberOne: 371,
      numberTwo: 2.3,
    })

    expect(response.status).toEqual(200)
    expect(response.body).toEqual(186.65)
  })

  it('should not be able to calculate the average, without the value of some paramenter', async () => {
    const response = await request(app)
      .post('/average')
      .send({
        numberOne: 371,
        numberTwo: Number(''),
      })

      expect(response.status).toEqual(400)
      expect(response.body.message).toEqual('Parameters not sent')
  })

  it('should not be able to calculate the average, with parameter value of type other than number', async () => {
    const response = await request(app)
      .post('/average')
      .send({
        numberOne: '22-33-56',
        numberTwo: 8.84,
      })

      expect(response.status).toEqual(400)
      expect(response.body.message).toEqual('Parameters are not numbers')
  })
})

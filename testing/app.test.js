
const supertest = require('supertest');
const index = require('../server/index.js');
const app = index.app;
const request = supertest(app);

describe('Products', () => {

  describe('/products/:id', () => {
    //Upon test completion close the connection to the server itself
    afterAll((done) => {
      // app.close() //this is an unsuppoorted function in the recent version supertest
      done()
    })

    test('should respond with 200 status code', async () => {
      const response = await request.get('/products/?product_id=1')
      expect(response.status).toBe(200)
    })

  })

})
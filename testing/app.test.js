
const supertest = require('supertest');
const index = require('../server/index.js');
const app = index.app;
const request = supertest(app);

describe('Products', () => {

  //TEST 1: product/:id
  describe('/products/:id', () => {

    //Upon test completion close the connection to the server itself
    // afterAll((done) => {
    //   // let server = app.listen(3000);
    //   app.close() //app.close isnt a function
    //   done()
    // })

    test('should respond with 200 status code', async () => {
      //should recieve poroduct id information from the db
      const response = await request.get('/products/?product_id=1')
      //server should respond to client with data and status code 200
      expect(response.status).toBe(200)
      //Upon test completion close the connection to the server itself
      // done();
    })

  })

  //Test2

})
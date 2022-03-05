const { expect } = require('chai');
let request = require('supertest');

describe('Get Product Meta Req', () => {

  after(() => {
    app.close(); //??
  })

  describe('/products/:id', () => {
    beforeEach(() => {
      return null; //??
    })

    it('should get product info from database', async () => {
      const response = await () => {
        //axios GET req the server with an id
        //axois.get('/products/') ...
      }
      expect(response.status).to.eql(200);
    })

  })
})
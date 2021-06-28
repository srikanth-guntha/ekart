  
import * as request from 'supertest';

describe('GET /api/books', () => {
  let server;
  beforeEach(() => {
    server = require('../main');
  });
  
  it('responds to /api/searchBooks', (done) => {
    request(server).get('/api/searchBooks/').expect(200, done);
  });

  it('should throw error not found', (done) => {
    request(server).get('/').expect(404, done);
  });

  it('Verify books list api response has items', (done) => {
    request(server)
      .get('/api/searchBooks?searchString=ang')
      .then((res) => {
        expect(res.body).toHaveProperty('items');
        done();
      });
  });

  it('Verify books list api response has no items', (done) => {
    request(server)
      .get('/api/searchBooks?searchString=uygkjhjhgmjhgcdcgfcvcgrdtrdtfgyhj')
      .then((res) => {
        expect(res.body.totalItems).toBe(0);
        done();
      });
  });

  it('Verify book info for a particular bookId', (done) => {
    request(server)
      .get('/api/bookinfo?bookId=D3wqAQAAMAAJ')
      .expect(200)
      .then((res) => {
        expect(res.body.id).toBe('D3wqAQAAMAAJ');
        done();
      });
  });

});
import * as superagent from 'superagent';
import {
  formatBookInfoResponse,
  formatSearchResponse,
} from '../helpers/helper';

export const BooksController = {
  searchBooks: (req, res) => {
    superagent
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.query.searchString}`
      )
      .end((err, response) => {
        if (err) {
          res.status(err.status).json({ error: { msg: err.message } });
          return;
        }
        res.json(formatSearchResponse(response.body));
      });
  },
  getBookInfo: (req, res) => {
    superagent
      .get(`https://www.googleapis.com/books/v1/volumes/${req.query.bookId}`)
      .end((err, response) => {
        if (err) {
          res.status(err.status).json({ error: { msg: err.message } });
          return;
        }
        res.json(formatBookInfoResponse(response.body));
      });
  },
};

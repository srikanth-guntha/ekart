import * as superagent from 'superagent';

export const BooksController = {
  searchBooks: (req, res) => {
    superagent
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${req.query.searchString}`
      )
      .end((err, response) => {
        if (err) {
          return console.log(err);
        }
        res.json(response.body);
      });
  },
  getBookInfo: (req, res) => {
    superagent
      .get(`https://www.googleapis.com/books/v1/volumes/${req.query.bookId}`)
      .end((err, response) => {
        if (err) {
          return console.log(err);
        }
        res.json(response.body);
      });
  },
};

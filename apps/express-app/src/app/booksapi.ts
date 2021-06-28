// import * as express from 'express';

// const app = express();
// const BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

// module.exports = {
//   getBooksBySearch: (searchString: string) => {
//     app.get(`${BASE_URL}  ?q=${searchString}`),
//       (res) => {
//         res.send({ message: 'search api called' });
//       };
//   },
// };

import * as request from 'request';

// module.exports = {
//   getBooksBySearch: function (url) {
//     return new Promise((resolve, reject) => {
//       request(url, { json: true }, (err, res, body) => {
//         if (err) reject(err);
//         resolve(body);
//       });
//     });
//   },
// };
export function getBooksBySearch(url: string) {
  return new Promise((resolve, reject) => {
    request(url, { json: true }, (err, res, body) => {
      if (err) reject(err);
      resolve(body);
    });
  });
}

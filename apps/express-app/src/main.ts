import * as express from 'express';
import * as path from 'path';
console.log(__dirname);
const CLIENT_BUILD_PATH = path.join(__dirname, '../ekart');
const app = express();
import { router } from './routes/bookapi';
app.use('/api', router);
app.use(express.static(CLIENT_BUILD_PATH));
app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});
const port = process.env.port || 4444;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports = app;

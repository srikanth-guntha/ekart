import * as express from 'express';

const app = express();
import { router } from './routes/bookapi';
app.use('/api', router);

const port = process.env.port || 4444;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);

module.exports = app;



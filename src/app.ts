import express from 'express';
import bodyParser from 'body-parser';
import { messageRoute } from './message';

const app = express();
const port = 3000;

app.post('/message', bodyParser.json(), messageRoute);
app.use('/avatar', express.static('avatar.png'))

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
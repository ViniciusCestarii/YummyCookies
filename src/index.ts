import express from 'express'
import { pickCookie } from './pickCookie'
import cookieParser from 'cookie-parser'


const app = express();
const port = process.env.PORT ?? 4000;

app.use(cookieParser());

app.get('/', (req, res) => {
  const randomFlavor = pickCookie(Object.keys(req.cookies));

  if (!randomFlavor) {
    return res.status(403).send('No more cookies for you! You them all already!');
  }

  res.cookie(randomFlavor.name, randomFlavor.options);
  res.status(201).send(`Random cookie flavor set: ${randomFlavor.name}. Enjoy!`);
});

app.listen(port, () => {
  console.info(`YummyCookies is running on port ${port}!`);
});

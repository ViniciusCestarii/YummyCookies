import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { pickCookie } from './pickCookie.js';

const port = process.env.PORT ?? 4000;

const app = express();

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: true
}));

app.use(cookieParser());

app.options('*', (_, res) => {
  res.header('Access-Control-Allow-Private-Network', 'true');
  res.sendStatus(204);
});

app.get('/', (req, res) => {
  const randomFlavor = pickCookie(Object.keys(req.cookies));

  if (!randomFlavor) {
    return res.status(403).send('No more cookies for you! You have them all already!');
  }

  res.cookie(randomFlavor.name, randomFlavor.value, randomFlavor.options);
  res.status(201).send(`Random cookie flavor set: ${randomFlavor.name}. Enjoy!`);
});

app.listen(port, () => {
  console.info(`YummyCookies is running on port ${port}!`);
});

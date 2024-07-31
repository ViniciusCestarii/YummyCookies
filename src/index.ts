import { pickCookie } from "./pickCookie";
import { Elysia } from "elysia";

const port = process.env.PORT ?? 4000;

const app = new Elysia();

app.get('/', ({ cookie }) => {
  const randomFlavor = pickCookie(Object.keys(cookie));

  if (!randomFlavor) {
    return new Response('No more cookies for you! You them all already!', { status: 403 });
  }

  return new Response(`Random cookie flavor set: ${randomFlavor}. Enjoy!`, {
    status: 201,
    headers: {
      'Set-Cookie': randomFlavor
    }
  })
});

app.listen(port, () => {
  console.info(`YummyCookies is running on port ${port}!`);
});

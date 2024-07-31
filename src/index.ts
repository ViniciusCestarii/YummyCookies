import { pickCookie } from "./pickCookie";
import { serve } from "bun";

const port = process.env.PORT ?? 3000

serve({
  port,
  fetch() {
    const randomFlavor = pickCookie();

    return new Response(`Random cookie flavor set: ${randomFlavor}. Enjoy!`, {
      status: 201,
      headers: {
        'Set-Cookie': randomFlavor
      }
    });
  },
});

console.info(`YummyCookies is running on port ${port}!`);

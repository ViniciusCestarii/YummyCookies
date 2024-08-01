import { Cookie } from "./cookie.js";
import { cookieFlavors } from "./cookieFlavors.js";
import { getRandomInt } from "./utils.js";

export const pickCookie = (existingCookies: string[]): Cookie | null => {
  const availableFlavors = cookieFlavors.filter(cookieFlavor => {
    return !existingCookies.some(cookie => cookie.startsWith(cookieFlavor));
  });

  if (availableFlavors.length === 0) {
    return null
  }

  const randomFlavor = availableFlavors[Math.floor(Math.random() * availableFlavors.length)];

  return {
    name: randomFlavor,
    value: "YummyCookie",
    options: {
      maxAge: getRandomInt(10000, 100000), // 10-100 seconds
      httpOnly: false,
      secure: true,
      sameSite: "strict",
    },
  };
}

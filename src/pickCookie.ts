import { Cookie } from "./cookie.js";
import { cookieFlavors } from "./cookieFlavors.js";
import { getRandomBool, getRandomInt, getRandomSameSite } from "./utils.js";

export const pickCookie = (existingCookies:string[]): Cookie | null => {
  const availableFlavors = cookieFlavors.filter(cookieFlavor => {
    return !existingCookies.some(cookie => cookie.startsWith(cookieFlavor));
  });

  if (availableFlavors.length === 0) {
    return null
  }

  const randomFlavor = availableFlavors[Math.floor(Math.random() * availableFlavors.length)];

  return {
    name: randomFlavor,
    options: {
      maxAge: getRandomInt(3600, 86400),
      httpOnly: getRandomBool(),
      secure: getRandomBool(),
      sameSite: getRandomSameSite(),
    },
  };
}

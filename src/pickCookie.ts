import { cookieFlavors } from "./cookieFlavors";

export const pickCookie = (existingCookies:string[]): string | null => {
  const availableFlavors = cookieFlavors.filter(flavor => {
    const flavorName = flavor.split('=')[0];
    return !existingCookies.some(cookie => cookie.startsWith(flavorName));
  });

  if (availableFlavors.length === 0) {
    return null
  }

  const randomFlavor = availableFlavors[Math.floor(Math.random() * availableFlavors.length)];

  return randomFlavor;
}

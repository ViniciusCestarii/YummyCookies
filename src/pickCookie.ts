import { cookieFlavors } from "./cookieFlavors";

export const pickCookie = (): string => {
  const randomFlavor = cookieFlavors[Math.floor(Math.random() * cookieFlavors.length)];

  return randomFlavor;
}

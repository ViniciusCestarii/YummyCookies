import type { CookieOptions } from "express"

export type Cookie = {
  name: string
  value: string
  options: CookieOptions
}
import { Space_Grotesk, Raleway, Syne } from 'next/font/google'

export const syne = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
  display: 'swap',
  preload: true,
})

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
})

export const synenew = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne-new',
  display: 'swap',
  preload: true,
})
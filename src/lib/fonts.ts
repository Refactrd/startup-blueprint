import { Space_Grotesk, Raleway } from 'next/font/google'

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
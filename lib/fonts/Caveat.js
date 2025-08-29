// lib/fonts.js
import localFont from 'next/font/local';
import { Caveat } from 'next/font/google';

export const caveat = Caveat({
  weight: '400',
  subsets: ['latin'],
});

export const logoFont = localFont({
  src: '../../public/fonts/OPTIBodoni-Antiqua.otf',
  weight: '700',
  style: 'normal',
  display: 'swap',
}); 
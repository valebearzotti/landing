import '@/styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
// Notion renderer styles
import 'prismjs/themes/prism-tomorrow.css';
import 'react-notion-x/src/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

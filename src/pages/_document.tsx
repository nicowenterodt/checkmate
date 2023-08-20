import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="aapple-mobile-web-app-capable" content="black-translucent" />
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
      </Head>
      <body className='bg-gray-900'>
        <Main />
        <NextScript />
      </body>
    </Html >
  );
}

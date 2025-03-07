// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {/* <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" /> */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"></link>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta name="description" content="Delhi Escort offers premium escort services with a focus on professionalism, authenticity, and unforgettable experiences." />
          <meta name="keywords" content="Delhi Escort, premium escorts, escort services, Delhi, model escorts" />
          <link rel="canonical" href="https://www.delhi-escorts.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
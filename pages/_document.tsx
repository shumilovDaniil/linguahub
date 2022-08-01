import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="linguahub/fonts/Aleo-Light.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Aleo-LightItalic.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Aleo-Regular.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Aleo-Bold.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Aleo-BoldItalic.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          {/* Bitter */}

          <link
            rel="preload"
            href="linguahub/fonts/Bitter-Light.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="linguahub/fonts/Bitter-Regular.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Bitter-Medium.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="linguahub/fonts/Bitter-Bold.woff"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
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

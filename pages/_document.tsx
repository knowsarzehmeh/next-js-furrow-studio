import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script type="text/javascript" src="/assests/js/jquery.min.js" />
          <script type="text/javascript" src="/assests/js/browser.min.js" />
          <script type="text/javascript" src="/assests/js/breakpoints.min.js" />
          <script type="text/javascript" src="/assests/js/util.js" />
          <script type="text/javascript" src="/assests/js/main.js" />
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

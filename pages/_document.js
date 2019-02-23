import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html>
        <Head>
          <title>fullyalive Store</title>
          <meta name="author" content={"fullaylive"} />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

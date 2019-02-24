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
          <meta name="author" content={"fullaylive"} />
          <link
            href="//cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.min.css"
            rel="stylesheet"
          />
          <style>{`body { background-color: #FFFFFF!important}`}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

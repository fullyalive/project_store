import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="ko">
        <Head>
          <meta name="author" content={"와일드워터"} />
          <link rel="manifest" href="/static/manifest.json" />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.13.6/antd.min.css"
            rel="stylesheet"
          />
          <style>{`body { background-color: #FFFFFF!important}`}</style>
          <meta name="theme-color" content="#00a0ff" /> {/* browser의 navigation bar 색깔 */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="와일드워터 - 구피, 베타, 새우 등 열대어 커뮤니티"
          /> 
          {/* title과 link 사이에 있는 설명 */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

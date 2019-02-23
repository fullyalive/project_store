import { Layout } from "antd";
import App, { Container } from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
const { Footer } = Layout;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    // component가 render되기 전에 불리는 함수 - data가 있을 때만 component를 render => 유저가 loading을 안보도록
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

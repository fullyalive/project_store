import { Layout } from "antd";
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
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
      <Container>
        <NProgressStyles color="#00a0ff" spinner={true} />
        <ApolloProvider client={apollo}>
          <Head>
            <title>와일드워터</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
            <Footer>This is important</Footer>
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withNProgress()(withApollo(MyApp));

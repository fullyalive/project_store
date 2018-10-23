import App, { Container } from "next/app";
import Header from "../components/Header";
import React from "react";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    // component가 render되기 전에 불리는 함수 - data가 있을 때만 component를 render
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    );
  }
}

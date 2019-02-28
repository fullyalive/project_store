import { Layout } from "antd";
import App, { Container } from "next/app";
import Head from "next/head";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import withNProgress from "next-nprogress";
import NProgressStyles from "next-nprogress/styles";
import convertDataURIToBinary from "../lib/base64";
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

  componentDidMount() {
    // window(browser)에 serviceWorker가 존재하는지 확인하고 설치
    if ("serviceWorker" in navigator && "PushManager" in window) {
      navigator.serviceWorker
        .register("/sw.js")
        .then(swReg => {
          console.log("SW Registered: ", swReg);
          // 알림 권한 요청
          // wildwater 페이지와 serviceWorker를 구글 API와 연동하면 구글 API에서 URL을 준다.
          // 그러면 우리는 그 URL로 메세지를 보내면 되는 것. 그 URL이 웹사이트랑 serviceWorker랑 연결될 것
          swReg.pushManager.getSubscription().then(subscription => {
            if (subscription === null) {
              Notification.requestPermission().then(permission => {
                if (permission === "granted") {
                  swReg.pushManager
                    .subscribe({
                      userVisibleOnly: true,
                      applicationServerKey: convertDataURIToBinary(
                        "BKm_21aeyYVH-HplWQC9ztuPMHQXPNuCmX-XnGw5iHUoZm-TiA9Z02L1xsN67ctTxqDWZcfEALX5PPp5arnfwho"
                      )
                    })
                    .then(pushSubscriptionObject => {
                      console.log(pushSubscriptionObject);
                    });
                }
              });
            } else {
              console.log(subscription);
            }
          });
        })
        .catch(error => console.log("Can't register SW: ", error));
    }
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

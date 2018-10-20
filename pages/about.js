import Head from "next/head";
import withLayout from "../lib/withLayout";

const About = () => (
  <div>
    <Head>
      <title>About | Fullyalive Store</title>
    </Head>
    <h1>About page</h1>
    <p>Lorem Ipsum</p>
  </div>
);

export default withLayout(About);
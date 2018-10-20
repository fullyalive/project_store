import Head from "next/head";
import withLayout from "../components/withLayout";

const About = () => (
  <div>
    <Head>
      <title>About | Fullyalive Store</title>
    </Head>
    <h1>About page</h1>
  </div>
);

export default withLayout(About);
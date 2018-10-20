import Head from "next/head";
import Link from "next/link";
import withLayout from "../components/withLayout";

const Index = () => (
  <div>
    <Head>
      <title>Home | Fullyalive Store</title>
    </Head>
    <h1>Hello from the index</h1>
    <Link href={"/about"}>
      <a>About page</a>
    </Link>
  </div>
);

export default withLayout(Index);
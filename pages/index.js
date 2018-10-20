import Head from "next/head";
import withLayout from "../lib/withLayout";
import PostLink from "../components/PostLink";

const Index = () => (
  <div>
    <Head>
      <title>Home | Fullyalive Store</title>
    </Head>
    <h1>Posts</h1>
    <ul>
      <li>
        <PostLink title={"Something"} />
      </li>
      <li>
        <PostLink title={"Something else"} />
      </li>
    </ul>
  </div>
);

export default withLayout(Index);

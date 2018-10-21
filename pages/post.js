import Head from "next/head";
import { withRouter } from "next/router";
import withLayout from "../lib/withLayout";

const Post = props => (
  <div>
    <Head>
      <title>{props.router.query.title} | Fullyalive Store</title>
    </Head>
    {/* {JSON.stringify(props)} - props를 볼 수 있음 */}
    <h1>{props.router.query.title}</h1>
    <p>lalala</p>
  </div>
);

export default withLayout(withRouter(Post));

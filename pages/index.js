import Head from "next/head";
import PostLink from "../components/PostLink";

class Index extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Home | Fullyalive Store</title>
        </Head>
        <h1>Movies</h1>
        <ul>
          <li>
            <PostLink title={"Something"} id={0} />
          </li>
          <li>
            <PostLink title={"Something else"} id={1} />
          </li>
        </ul>
      </div>
    );
  }
}

export default Index;

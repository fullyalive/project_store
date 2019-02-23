import Head from "next/head";
import Header from "../components/Header";
import Button from "../components/Button";
import { Layout } from "antd";
const { Content } = Layout;

export default ({ data }) => (
  <>
    <Head>
      <title>Home | fullyalive Store</title>
    </Head>
    <Header
      centerColumn={<h4>fullyalive Store</h4>}
      rightColumn={
        <Button href="/cart" text="Cart" btnIcon={"shopping-cart"} />
      }
      leftColumn={<Button href="/search" text="Search" btnIcon={"search"} />}
    />
    <Content style={{ padding: "0 50px" }}>
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          width: "100%"
        }}
      >
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"새우"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"구피"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"베타"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"네온"}
        />
        <Button
          href={`/category?name=men`}
          hrefAs={`/category/men`}
          text={"코이"}
        />
      </div>
    </Content>
  </>
);

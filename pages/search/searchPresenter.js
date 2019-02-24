import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Layout, Input } from "antd";

import ProductCard from "../../components/ProductCard";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>Search | WildWater</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "검색" : `${searchTerm} : 검색결과`}</h4>
      }
      rightColumn={<Button href="/cart" text="Cart" />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        onChange={updateSearchTerm}
        placeholder={"검색어를 입력하세요"}
        value={searchTerm}
      />
    </Content>
  </>
);
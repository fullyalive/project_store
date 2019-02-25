import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CartButton from "../../components/CartButton";
import ProductCard from "../../components/ProductCard";
import { Layout, Input } from "antd";
const { Content } = Layout;

export default ({ data, updateSearchTerm, searchTerm }) => (
  <>
    <Head>
      <title>검색 | 와일드워터</title>
    </Head>
    <Header
      centerColumn={
        <h4>{searchTerm === "" ? "검색" : `${searchTerm} : 검색결과`}</h4>
      }
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <Content style={{ padding: "0 50px" }}>
      <Input
        onChange={updateSearchTerm}
        placeholder={"검색어를 입력하세요"}
        value={searchTerm}
      />
      <div
        style={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          width: "100%",
          margin: "50px 0px"
        }}
      >
        {data &&
          data.products &&
          data.products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              subtitle={product.detail}
              price={product.price}
              photoUrl={product.photo.url}
            />
          ))}
      </div>
    </Content>
  </>
);

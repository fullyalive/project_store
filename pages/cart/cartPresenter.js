import Head from "next/head";
import Header from "../../components/Header";
import Button from "../../components/Button";
import { Button as AntButton } from "antd";
import ProductCard from "../../components/ProductCard";

const reducerFn = (price, product) => price + product.price;

export default ({ data, onPay }) => (
  <>
    <Head>
      <title>장바구니 | 와일드워터</title>
    </Head>
    <Header
      centerColumn={<h4>장바구니</h4>}
      rightColumn={<Button href="/" text="Home" />}
      leftColumn={<Button href="/search" text="검색" />}
    />
    <div
      style={{
        display: "grid",
        gridGap: "10px",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        width: "100%",
        padding: "0 50px",
        paddingBottom: "50px",
        backgroundColor: "#ffffff"
      }}
    >
      {data &&
        data.cart &&
        data.cart.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            subtitle={product.subtitle}
            price={product.price}
            photoUrl={product.photo.url}
            price={product.price}
          />
        ))}
    </div>
    <div style={{ padding: "0px 50px", backgroundColor: "#ffffff" }}>
      <h3>총 가격: {data && data.cart && data.cart.reduce(reducerFn, 0)} 원</h3>
      <AntButton onClick={onPay}>결제하기</AntButton>
    </div>
  </>
);

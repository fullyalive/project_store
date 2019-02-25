import Head from "next/head";
import { Button as AntButton } from "antd";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CartButton from "../../components/CartButton";

export default ({ data, toggleCart }) => (
  <>
    <Head>
      <title>{data.product.name} | 와일드워터</title>
    </Head>
    <Header
      centerColumn={<h4>Product</h4>}
      rightColumn={<CartButton />}
      leftColumn={<Button href="/" text="Home" />}
    />
    <div className={"product"}>
      <img src={data.product.photo.url} />
      <div>
        <h2>{data.product.name}</h2>
        <h3>{data.product.subtitle}</h3>
        <h4>{data.product.description}</h4>
        <AntButton type="primary" onClick={toggleCart}>
          장바구니 담기(
          {data.product.price}원)
        </AntButton>
      </div>
      <style jsx>{`
        .product {
          display: grid;
          padding: 50px;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 50px;
          background-color: #ffffff;
        }
        .product img {
          max-width: 100%;
        }
      `}</style>
    </div>
  </>
);

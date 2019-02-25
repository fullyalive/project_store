import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "./fragments";

export const defaults = {
  cart: []
};

// 장바구니에 담기 버튼을 누르면 toggleProduct라고 불리는 resolver안의 mutation이 getCacheKey 함수를 통해 product id를 받아온다.
export const resolvers = {
  Mutation: {
    toggleProduct: (_, variables, { cache, getCacheKey }) => {
      // Apollo는 자동으로 cache에 접근할 방법을 제공하고 getCacheKey를 제공
      const id = getCacheKey({ __typename: "Product", id: variables.id });
      const fragment = gql`
        ${PRODUCT_FRAGMENT}
      `;
      const product = cache.readFragment({ fragment, id });
      const cartQuery = gql`
        {
          cart @client {
            id # cart에서 product를 지울 때 필요
          }
        }
      `;
      const { cart } = cache.readQuery({ query: cartQuery });
      let newCart;
      let onCart;
      const foundProduct = cart.find(aProduct => aProduct.id === product.id); // find()는 조건에 맞는 array에 있는 모든 아이템들을 받는다.
      if (foundProduct) {
        const cleanCart = cart.filter(aProduct => aProduct.id !== product.id);
        newCart = cleanCart;
        onCart = false;
      } else {
        newCart = [...cart, product];
        onCart = true;
      }
      cache.writeData({
        data: {
          cart: newCart
        }
      });
      cache.writeFragment({
        id: `Product:${product.id}`, // id가 있는 fragment를 찾아서
        fragment: PRODUCT_FRAGMENT, // 사용하고 싶은 fragment를 적는다
        data: { // 그 데이터에 framgent를 주는 것
          __typename: "Product",
          ...product, // 이전 product 데이터를 넘겨주는 것 : product가 name, subtitle, photo등 다양하지만 바꾸고 싶은건 onCart이기 때문
          onCart
        }
      });
      return null;
    }
  },
  Product: {
    onCart: () => false
  }
};

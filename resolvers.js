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
      const foundProduct = cart.find(aProduct => aProduct.id === product.id); // find()는 조건에 맞는 array에 있는 모든 아이템들을 받는다.
      if (foundProduct) {
        const cleanCart = cart.filter(aProduct => aProduct.id !== product.id);
        newCart = cleanCart;
      } else {
        newCart = [...cart, product];
      }
      cache.writeData({
        data: {
          cart: newCart
        }
      });
      return null;
    }
  }
};

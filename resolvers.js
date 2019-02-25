import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "./fragment";

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
      cache.writeData({
          data: {
             cart:  [...cart, product] // 넘겨줄 데이터는 [...cart]이전 Array에 product(새로 추가할 Product)
          }
      });
      return null;
    }
  }
};

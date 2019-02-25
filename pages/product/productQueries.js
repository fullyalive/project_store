import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const PRODUCT_QUERY = gql`
  query productQuery($id: ID!) {
    product(where: { id: $id }) {
      ...ProductItems
      onCart @client
    }
  }
  ${PRODUCT_FRAGMENT}
`;

export const TOGGLE_CART = gql`
  mutation toggleCart($id: ID!) {
    # ID형태의 id를 받는 toggleCart mutation
    toggleProduct(id: $id) @client # Apollo에게 client에서만 동작할 거라고 알려준다
  }
`;

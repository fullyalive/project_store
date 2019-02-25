import { get, gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragments";

export const INDEX_QUERY = gql`
  {
    categories {
      id
      createdAt
      name
    }
    onSale: products(where: { sale: true }) {
      ...ProductItems
    }
    allProducts: products(where: { sale: false }) {
      ...ProductItems
    }
  }
  ${PRODUCT_FRAGMENT}
`;

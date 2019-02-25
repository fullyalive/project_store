import { gql } from "apollo-boost";
import { PRODUCT_FRAGMENT } from "../../fragment";

export const SEARCH_QUERY = gql`
  query searchQuery(
    $searchTerm: String! # 아폴로를 이용해 변수를 받는 쿼리로 변경
  ) {
    products(
      where: {
        OR: [
          { name_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      ...ProductItems # fragment.js 에서 받아온다.
    }
  }
  ${PRODUCT_FRAGMENT} # fragment.js 에서 받아온다.
`;

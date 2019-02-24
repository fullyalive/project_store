import { gql } from "apollo-boost";

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
      id
      name
      subtitle
      price
      photo {
          url
      }
    }
  }
`;

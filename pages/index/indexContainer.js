import { Query } from "react-apollo";
import { INDEX_QUERY } from "./indexQueries";
import IndexPresenter from "./indexPresenter";

export default () => (
  <Query query={INDEX_QUERY}>
    {({ data }) => <IndexPresenter data={data} />}
  </Query>
);

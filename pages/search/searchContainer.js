import { Query } from "react-apollo";
import SearchPresenter from "./searchPresenter";
import { SEARCH_QUERY } from "./searchQueries";

export default class extends React.Component {
  state = {
    searchTerm: "",
    canSearch: false
  };
  render() {
    const { searchTerm, canSearch } = this.state;
    return (
      // skip: search를 할 수 없는 조건(canSearch = false)이면 쿼리를 실행하지 않는 것(component에 data를 주지 않는 것)
      <Query skip={!canSearch} query={SEARCH_QUERY} variables={{ searchTerm }}>
        {({ data }) => (
          <SearchPresenter
            searchTerm={searchTerm}
            updateSearchTerm={this._updateSearchTerm}
            data={data}
          />
        )}
      </Query>
    );
  }
  // 0.5초마다 마지막 입력한 값으로 검색하는 함수
  _updateSearchTerm = event => {
    this.setState({ canSearch: false });
    clearTimeout(this.searchTimeout); // 입력하면 기존에 있던 timeout 제거
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    }); // input 업데이트
    this.searchTimeout = setTimeout(
      () => this.setState({ canSearch: true }),
      500
    );
  }; // timeout이 일어나기 전까지는 query를 날리지 않는 것
}

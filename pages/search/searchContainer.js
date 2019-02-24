import SearchPresenter from "./searchPresenter";

export default class extends React.Component {
  state = {
    searchTerm: "",
    canSearch: false
  };
  render() {
    const { searchTerm, canSearch } = this.state;
    return (
      <SearchPresenter
        searchTerm={searchTerm}
        updateSearchTerm={this._updateSearchTerm}
      />
    );
  }
  // 0.5초마다 마지막 입력한 값으로 검색하는 함수
  _updateSearchTerm = event => {
    clearTimeout(this.searchTimeout); // 입력하면 기존에 있던 timeout 제거
    const {
      target: { value }
    } = event;
    this.setState({
      searchTerm: value
    }); // input 업데이트
    this.searchTimeout = setTimeout(() => console.log("Searching..."), 500); // timeout 생성
  };
}
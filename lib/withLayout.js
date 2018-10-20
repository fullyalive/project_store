import React from "react";
import Header from "../components/Header";

const withLayout = Component => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Header />
          <Component />
        </div>
      );
    }
  };
};

export default withLayout;

// Component를 생성하면, argument로 Component로 받아오면 다른 컴포넌트를 리턴할거야.
// 우리가 준 컴포넌트와 함께 위에 Header를 포함한 것으로.

import React from "react";
import "./styles/Page.css";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }
  render() {
    const { children } = this.props;
    return <section className="page" ref={this.wrapper}>{children}</section>;
  }
}
export default Page;

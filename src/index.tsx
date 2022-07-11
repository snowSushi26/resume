import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");

const Component: React.FunctionComponent<{ title: string }> = ({
  children,
  title,
}) => (
  <div title={title}>
    {children}
    <br />
    {title}
  </div>
);

class Root extends React.Component {
  render() {
    return (
      <div>
        <Component title={"Hello"}>Hello</Component>
      </div>
    );
  }
}

ReactDOM.render(<Root />, rootElement);

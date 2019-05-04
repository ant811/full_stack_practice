import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>renders to DOM</div>;
};
ReactDOM.render(<App />, document.getElementById("app"));

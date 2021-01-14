import React from "react";
import ReactDom from "react-dom";
import Parts from "./parts";


function App() {
  return <Parts />;
}

ReactDom.render(<App />, document.getElementById("root"));

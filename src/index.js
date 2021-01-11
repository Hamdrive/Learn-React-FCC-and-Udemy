import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>HELLO WORLD AND WELCOME TO MY VERY FIRST REACT APP</h1>
      <br />
      <h3>Here I will:</h3>
      <ul>
        <li>Get a hold of the basics</li>
        <li>Work on small projects side by side</li>
        <li>Munch on peanuts to keep me going!</li>
      </ul>
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));

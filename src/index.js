import React from "react";
import ReactDom from "react-dom";

const fName = "Hamza";
const luckyNumber = Math.floor(Math.random() * 10);

function App() {
  return (
    <div>
      <h1>
        <u>With Curly Brackets</u>
      </h1>
      <h3>
        Hello {fName}, Your Lucky Number is {luckyNumber}!
      </h3>
      <br />
      <h1>
        <u>String Interpolation</u>
      </h1>
      <h3>{`Hello ${fName}, Your Lucky Number is ${luckyNumber}!`}</h3>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));

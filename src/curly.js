import React from "react";

const fName = "Hamza";
const luckyNumber = Math.floor(Math.random() * 10);

function Curly(){
    return(
        <div>
            <h1>
                <u>With Curly Brackets</u>
            </h1>
            <h3>
                Hello {fName}, Your Lucky Number is {luckyNumber}!
            </h3>
        </div>
    )
}

export default Curly;
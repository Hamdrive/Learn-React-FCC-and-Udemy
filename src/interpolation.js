import React from "react";

const fName = "Hamza";
const luckyNumber = Math.floor(Math.random() * 10);

function Interpolation(){
    return(
        <div>
            <h1>
                <u>String Interpolation</u>
            </h1>
            <h3>{`Hello ${fName}, Your Lucky Number is ${luckyNumber}!`}</h3>
        </div>
    )
}

export default Interpolation;
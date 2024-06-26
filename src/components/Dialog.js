import React from "react";
import FancyBorder from "./FancyBorder";

// FancyBorder를 불러옴: title + message 구성
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1>{props.title}</h1>
            <p>{props.message}</p>

            {props.children}            
        </FancyBorder>        

    )
}

export default Dialog





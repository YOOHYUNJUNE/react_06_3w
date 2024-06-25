import React from "react";

function NumberList(props) {
    const numbers = [11, 22, 33, 44 ,55]
    const listItem = numbers.map((num, index) => <li key={index}>{num}</li>) // 각 child에 키값을 줌(오류X)

    return (
        <ul>
            {listItem}
        </ul>
    )






}

export default NumberList





